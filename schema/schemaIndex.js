var { buildSchema } = require('graphql');
const albumSchema = require('./schemas/albumSchema')
const artistSchema = require('./schemas/artistSchema')


var string = `
    type Query {
        ${artistSchema.query}
        ${albumSchema.query}
    }
${artistSchema.type}
${albumSchema.type}
`

module.exports = buildSchema(string)
