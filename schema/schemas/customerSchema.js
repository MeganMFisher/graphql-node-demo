module.exports = {
    query: 'customers: [Customer]',
    type: `
    type Customer {
        CustomerId: Int,
        FirstName: String,
        LastName: String,
        Company: String,
        Address: String,
        City: String,
        State: String,
        Country: String,
        PostalCode: String,
        Phone: String,
        Fax: String,
        Email: String,
        SupportRepId: Int
    }`
}