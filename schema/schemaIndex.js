var { buildSchema } = require('graphql');
const albumSchema = require('./schemas/albumSchema')
const artistSchema = require('./schemas/artistSchema')
const customerSchema = require('./schemas/customerSchema')
const employeeSchema = require('./schemas/employeeSchema')
const genreSchema = require('./schemas/genreSchema')
const invoiceSchema = require('./schemas/invoiceSchema')


var string = `
    type Query {
        ${artistSchema.query}
        ${albumSchema.query}
        ${customerSchema.query}
        ${employeeSchema.query}
        ${genreSchema.query}
        ${invoiceSchema.query}
    }
${artistSchema.type}
${albumSchema.type}
${customerSchema.type}
${employeeSchema.type}
${genreSchema.type}
${invoiceSchema.type}
`

module.exports = buildSchema(string)
