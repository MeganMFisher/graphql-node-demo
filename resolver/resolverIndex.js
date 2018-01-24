const artistResolver = require('./resolvers/artistResolver');
const albumResolver = require('./resolvers/albumResolver');

const obj = Object.assign({}, albumResolver, artistResolver)

console.log(obj)

module.exports = obj

