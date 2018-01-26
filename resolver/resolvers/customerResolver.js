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
    return psql.manyOrNone(customerQuery, [], function(e){
        return e
    });
}

var createCustomer = async function(args){
    var albumsQuery = ''
    let id = await psql.manyOrNone('select count(*) from "Customer"', [], function(e){
        return e
    });
    id = +id[0].count + 1
    customerQuery = `insert into "Customer" ("CustomerId", "FirstName", "LastName", "Company", "Address", "City", "State", "Country", "PostalCode", "Phone", "Fax", "Email", "SupportRepId") values (${id}, '${args.input.FirstName}', '${args.input.LastName}', '${args.input.Company}', '${args.input.Address}', '${args.input.City}', '${args.input.State}', '${args.input.Country}', '${args.input.PostalCode}', '${args.input.Phone}', '${args.input.Fax}', '${args.input.Email}', '${args.input.SupportRepId}');`
    return psql.manyOrNone(customerQuery, [], function(e){
        return e
    });
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
    customerQuery = `update "Customer" ${update} where "CustomerId" = ${args.id}`
    return psql.manyOrNone(customerQuery, [], function(e){
        return e
    });
}

var deleteCustomer = function(args){
    var customerQuery = `delete from "Customer" where "CustomerId" = ${args.id}`
    return psql.manyOrNone(customerQuery, [], function(e){
        return e
    });
}


module.exports = {
    customers: getCustomers,
    createCustomer: createCustomer,
    updateCustomer: updateCustomer,
    deleteCustomer: deleteCustomer
}