var { buildSchema } = require('graphql');
const userSchema = require('./schemas/userSchema')

var string = `${userSchema}`

module.exports = buildSchema(string)
