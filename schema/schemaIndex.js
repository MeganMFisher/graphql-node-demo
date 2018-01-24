var { buildSchema } = require('graphql');
const userSchema = require('./schemas/userSchema')
const albumSchema = require('./schemas/albumSchema')


var string = `
    type Query {
        ${userSchema.query}
        ${albumSchema.query}
    }
${userSchema.type}
${albumSchema.type}
`

module.exports = buildSchema(string)
