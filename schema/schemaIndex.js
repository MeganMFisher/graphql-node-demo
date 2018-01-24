var { buildSchema } = require('graphql');
const albumSchema = require('./schemas/albumSchema')
const artistSchema = require('./schemas/artistSchema')
const customerSchema = require('./schemas/customerSchema')
const employeeSchema = require('./schemas/employeeSchema')
const genreSchema = require('./schemas/genreSchema')
const invoiceSchema = require('./schemas/invoiceSchema')
const invoiceLineSchema = require('./schemas/invoiceLineSchema')
const mediaTypeSchema = require('./schemas/mediaTypeSchema')
const playlistSchema = require('./schemas/playlistSchema')
const playlistTrackSchema = require('./schemas/playlistTrackSchema')
const trackSchema = require('./schemas/trackSchema')


var string = `
    type Query {
        ${artistSchema.query}
        ${albumSchema.query}
        ${customerSchema.query}
        ${employeeSchema.query}
        ${genreSchema.query}
        ${invoiceSchema.query}
        ${invoiceLineSchema.query}
        ${mediaTypeSchema.query}
        ${playlistSchema.query}
        ${playlistTrackSchema.query}
        ${trackSchema.query}
    }
${artistSchema.type}
${albumSchema.type}
${customerSchema.type}
${employeeSchema.type}
${genreSchema.type}
${invoiceSchema.type}
${invoiceLineSchema.type}
${mediaTypeSchema.type}
${playlistSchema.type}
${playlistTrackSchema.type}
${trackSchema.type}
`

module.exports = buildSchema(string)
