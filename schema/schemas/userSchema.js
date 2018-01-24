module.exports = `
type Query {
    users: [User]
},
type User {
    id: Int
    name: String,
    email: String
}
`