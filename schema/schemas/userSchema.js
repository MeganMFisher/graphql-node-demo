module.exports = {
    query: 'users: [User]',
    type: `
    type User {
        id: Int
        name: String,
        email: String
    }`
}