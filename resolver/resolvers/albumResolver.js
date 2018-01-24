const psql = require('../../dbConnection');

var getAlbums = function(args) {
    const albumsQuery = 'select * from "Album"';
    return psql.manyOrNone(albumsQuery, [], function(e){
        return e
    });
}

module.exports = {
    albums: getAlbums
}