const psql = require('../../dbConnection');

var getCustomers = function(args) {
    const customerQuery = 'select * from "Customer"';
    return psql.manyOrNone(customerQuery, [], function(e){
        return e
    });
}

var getCustomersSupportReps = function(args) {
    const customerQuery = 'SELECT c."FirstName", c."LastName", e."FirstName", e."LastName" FROM "Customer" c JOIN "Employee" e ON c."SupportRepId" = e."EmployeeId";';
    return psql.manyOrNone(customerQuery, [], function(e){
        return e
    });
}

module.exports = {
    customers: getCustomers,
    resolveCustomersSupportReps: getCustomersSupportReps
}