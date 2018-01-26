const albumResolver = require('./resolvers/albumResolver');
const artistResolver = require('./resolvers/artistResolver');
const customerResolver = require('./resolvers/customerResolver');
const employeeResolver = require('./resolvers/employeeResolver')
const genreResolver = require('./resolvers/genreResolver')
const invoiceResolver = require('./resolvers/invoiceResolver')
const invoiceLineResolver = require('./resolvers/invoiceLineResolver');
const mediaTypeResolver = require('./resolvers/mediaTypeResolver');
const playlistResolver = require('./resolvers/playlistResolver');
const playlistTrackResolver = require('./resolvers/playlistTrackResolver');
const trackResolver = require('./resolvers/trackResolver');

const obj = Object.assign(
    {}, 
    albumResolver, 
    artistResolver, 
    customerResolver, 
    employeeResolver, 
    genreResolver, 
    invoiceResolver, 
    invoiceLineResolver, 
    mediaTypeResolver, 
    playlistResolver, 
    playlistTrackResolver, 
    trackResolver,
)

// console.log(obj)

module.exports = obj

