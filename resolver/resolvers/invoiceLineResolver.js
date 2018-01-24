const psql = require('../../dbConnection');

var getInvoiceLines = function(args) {
    const invoiceLinesQuery = 'select * from "InvoiceLine"';
    return psql.manyOrNone(invoiceLinesQuery, [], function(e){
        // console.log(e)
        return e
    });
}

module.exports = {
    invoiceLines: getInvoiceLines
}