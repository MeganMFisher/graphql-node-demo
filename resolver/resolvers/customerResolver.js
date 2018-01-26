const psql = require('../../dbConnection');

var getCustomers = function(args) {
    var customerQuery = ''
    if(args.Name){
        let name = args.Name.split(' ')
        customerQuery = `select * from "Customer" where "FirstName" = '${name[0]}' and "LastName" = '${name[1]}'`
    } else if (Object.keys(args)[0]){
        customerQuery = `select * from "Customer" where "${Object.keys(args)[0]}" = '${args[Object.keys(args)[0]]}'`
    } else { 
        customerQuery = 'select * from "Customer"';
    }
    return psql.manyOrNone(customerQuery);
}

var createCustomer = async function(args){
    var albumsQuery = ''
    let ids = await psql.manyOrNone('select "CustomerId" from "Customer"');
    let max = 0
    ids.map(e => {
        if (e.CustomerId > max) max = e.CustomerId
    })
    max = +max + 1
    customerQuery = `insert into "Customer" ("CustomerId", "FirstName", "LastName", "Company", "Address", "City", "State", "Country", "PostalCode", "Phone", "Fax", "Email", "SupportRepId") values (${max}, '${args.input.FirstName}', '${args.input.LastName}', '${args.input.Company}', '${args.input.Address}', '${args.input.City}', '${args.input.State}', '${args.input.Country}', '${args.input.PostalCode}', '${args.input.Phone}', '${args.input.Fax}', '${args.input.Email}', '${args.input.SupportRepId}') returning *;`
    return psql.one(customerQuery);
}

var updateCustomer = function(args){
    var customerQuery = ''
    let update = `set `
    Object.keys(args).map((e, i) => {
        if(e !== 'id'){
            let type = typeof args[e]
            update += `${i !== 1 ? ', ' : ''}"${e}" = ${type === 'number' ? args[e] : `'${args[e]}'`}`
        }
    })
    customerQuery = `update "Customer" ${update} where "CustomerId" = ${args.id} returning *`
    return psql.one(customerQuery);
}

var deleteCustomer = function(args){
    var customerQuery = `delete from "Customer" where "CustomerId" = ${args.id} returning *;`
    return psql.one(customerQuery);
}


module.exports = {
    customers: getCustomers,
    createCustomer: createCustomer,
    updateCustomer: updateCustomer,
    deleteCustomer: deleteCustomer
}