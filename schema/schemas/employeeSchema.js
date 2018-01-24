module.exports = {
    query: 'employees: [Employee]',
    type: `
    type Employee {
        EmployeeId: Int,
        LastName: String,
        FirstName: String,
        Title: String,
        ReportsTo: Int,
        BirthDate: String,
        HireDate: String,
        Address: String,
        City: String,
        State: String,
        Country: String,
        PostalCode: String,
        Phone: String, 
        Fax: String, 
        Email: String
    }`
}