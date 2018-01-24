const psql = require('../../dbConnection');

var getInvoices = function(args) {
    const invoiceQuery = 'select * from "Invoice"';
    return psql.manyOrNone(invoiceQuery, [], function(e){
        return e
    });
}

module.exports = {
    invoices: getInvoices
}

