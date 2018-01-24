module.exports = {
    query: 'invoices: [Invoice]',
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
    }`
}