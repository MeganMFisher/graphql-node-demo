const psql = require('../../dbConnection');

var getAlbums = function(args) {
    const albumsQuery = 'select * from "Album"';
    return psql.manyOrNone(albumsQuery, [], function(e){
        console.log('I am right here!!',e)
        return e
    });
}

module.exports = {
    albums: getAlbums
}