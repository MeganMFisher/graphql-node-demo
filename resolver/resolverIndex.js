const artistResolver = require('./resolvers/artistResolver');
const albumResolver = require('./resolvers/albumResolver');
const customerResolver = require('./resolvers/customerResolver');
const employeeResolver = require('./resolvers/employeeResolver')
const genreResolver = require('./resolvers/genreResolver')
const invoiceResolver = require('./resolvers/invoiceResolver')

const obj = Object.assign({}, albumResolver, artistResolver, customerResolver, employeeResolver, genreResolver, invoiceResolver)


module.exports = obj

