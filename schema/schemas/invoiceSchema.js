module.exports = {
    query: 'invoices: [Invoice]',
    queryInvoicesOver99Cent: 'resolveInvoicesOver99Cent: [Invoice]',
    queryInvoicesCustomerInfo: 'resolveInvoicesCustomerInfo: [InvoiceCustomerInfo]',
    type: `
    type Invoice {
        InvoiceId: Int,
        CustomerId: Int,
        InvoiceDate: String,
        BillingAddress: String,
        BillingCity: String,
        BillingState: String,
        BillingCountry: String, 
        BillingPostalCode: String,
        Total: String
    }`,
    typeCustomerInfo: `
    type InvoiceCustomerInfo {
        InvoiceDate: String,
        FirstName: String,
        LastName: String,
        Total: String,
    }`
}