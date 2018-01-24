
module.exports = {
    query: 'invoiceLines: [InvoiceLine]',
    type: `
    type InvoiceLine {
        InvoiceLineId: Int
        InvoiceId: Int
        TrackId: Int
        UnitPrice: String
        Quantity: Int
    }`
}