const psql = require('../../dbConnection');

var getEmployees = function(args) {
    const employeeQuery = 'select * from "Employee"';
    return psql.manyOrNone(employeeQuery, [], function(e){
        return e
    });
}

module.exports = {
    employees: getEmployees
}