const psql = require('../../dbConnection');

var getInvoices = function(args) {
    const invoiceQuery = 'select * from "Invoice"';
    return psql.manyOrNone(invoiceQuery, [], function(e){
        return e
    });
}

var getInvoicesOver99Cent = function(args) {
    const invoiceQuery = 'SELECT * FROM "Invoice" i JOIN "InvoiceLine" il ON il."InvoiceId" = i."InvoiceId" WHERE il."UnitPrice" > 0.99;';
    return psql.manyOrNone(invoiceQuery, [], function(e){
        console.log(e)
        return e
    });
}

var getInvoiceCustomerInfo = function(args) {
    const invoiceQuery = 'SELECT i."InvoiceDate", c."FirstName", c."LastName", i."Total" FROM "Invoice" i JOIN "Customer" c ON i."CustomerId" = c."CustomerId";';
    return psql.manyOrNone(invoiceQuery, [], function(e){
        console.log(e)
        return e
    });
}

module.exports = {
    invoices: getInvoices,
    resolveInvoicesOver99Cent: getInvoicesOver99Cent,
    resolveInvoicesCustomerInfo: getInvoiceCustomerInfo
}

