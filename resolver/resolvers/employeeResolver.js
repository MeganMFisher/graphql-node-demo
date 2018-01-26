const psql = require('../../dbConnection');

var getEmployees = (args) => {
    var artistQuery = ''
    if(args[Object.keys(args)[0]]){
        employeeQuery = `select * from "Employee" where "${Object.keys(args)[0]}" = ${args[Object.keys(args)[0]] === 'number' ? args[Object.keys(args)[0]] : `'${args[Object.keys(args)[0]] }'`}`
    } else { 
        employeeQuery = 'select * from "Employee"';
    }
    return psql.manyOrNone(employeeQuery);
}

var createEmployee = (args) => {
    const {EmployeeId, LastName, FirstName, Title, ReportsTo, Address, City, State, Country, PostalCode, Phone, Fax, Email} = args.input;


    const employeeQuery = `insert into "Employee"("EmployeeId", "LastName", "FirstName", "Title", "ReportsTo", "Address", "City", "State", "Country", "PostalCode", "Phone", "Fax", "Email") values(${EmployeeId}, '${LastName}', '${FirstName}', '${Title}', ${ReportsTo}, '${Address}', '${City}', '${State}', '${Country}', '${PostalCode}', '${Phone}', '${Fax}', '${Email}') returning *;`

    return psql.one(employeeQuery)    
}

var updateEmployee = (args) => {
    var employeeQuery = ''
    let update = `set `
    Object.keys(args).map((e, i) => {
        if(e !== 'EmployeeId'){
            let type = typeof args[e]
            update += `${i !== 1 ? ', ' : ''}"${e}" = ${type === 'number' ? args[e] : `'${args[e]}'`}`
        }
    })
    employeeQuery = `update "Employee" ${update} where "EmployeeId" = ${args.EmployeeId} returning *`
    return psql.one(employeeQuery);
}



var deleteEmployee = ({EmployeeId}) => {
    const employeeQuery = `delete from "Employee" where "EmployeeId" = ${EmployeeId} returning *;`
    return psql.one(employeeQuery)
}

module.exports = {
    employees: getEmployees,
    createEmployee: createEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee
}

