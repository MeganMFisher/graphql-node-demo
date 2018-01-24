const psql = require('../../dbConnection');

var getArtists = function(args) {
    const usersQuery = 'select * from "Artist"';
    return psql.manyOrNone(usersQuery, [], function(e){
        return e
    });
}

module.exports = {
    artists: getArtists
}