const userResolver = require('./resolvers/userResolver');
const albumResolver = require('./resolvers/albumResolver');

const obj = Object.assign({}, userResolver, albumResolver)

console.log(obj)

module.exports = obj

