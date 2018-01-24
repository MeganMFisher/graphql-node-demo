var { buildSchema } = require('graphql');
const userSchema = require('./schemas/userSchema')
const albumSchema = require('./schemas/albumSchema')
const invoiceLineSchema = require('./schemas/invoiceLineSchema')
const mediaTypeSchema = require('./schemas/mediaTypeSchema')
const playlistSchema = require('./schemas/playlistSchema')
const playlistTrackSchema = require('./schemas/playlistTrackSchema')
const trackSchema = require('./schemas/trackSchema')


var string = `
    type Query {
        ${userSchema.query}
        ${albumSchema.query}
        ${invoiceLineSchema.query}
        ${mediaTypeSchema.query}
        ${playlistSchema.query}
        ${playlistTrackSchema.query}
        ${trackSchema.query}
    }
${userSchema.type}
${albumSchema.type}
${invoiceLineSchema.type}
${mediaTypeSchema.type}
${playlistSchema.type}
${playlistTrackSchema.type}
${trackSchema.type}
`

module.exports = buildSchema(string)
