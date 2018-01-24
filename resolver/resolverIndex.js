const userResolver = require('./resolvers/userResolver');
const albumResolver = require('./resolvers/albumResolver');
const invoiceLineResolver = require('./resolvers/invoiceLineResolver');
const mediaTypeResolver = require('./resolvers/mediaTypeResolver');
const playlistResolver = require('./resolvers/playlistResolver');
const playlistTrackResolver = require('./resolvers/playlistTrackResolver');
const trackResolver = require('./resolvers/trackResolver');

const obj = Object.assign({}, userResolver, albumResolver, invoiceLineResolver, mediaTypeResolver, playlistResolver, playlistTrackResolver, trackResolver)

// console.log(obj)

module.exports = obj

