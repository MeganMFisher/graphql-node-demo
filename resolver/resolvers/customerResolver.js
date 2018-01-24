const psql = require('../../dbConnection');

var getCustomers = function(args) {
    const customerQuery = 'select * from "Customer"';
    return psql.manyOrNone(customerQuery, [], function(e){
        return e
    });
}

module.exports = {
    customers: getCustomers
}