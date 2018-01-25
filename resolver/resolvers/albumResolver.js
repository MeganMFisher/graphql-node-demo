const psql = require('../../dbConnection');

var getAlbums = function(args) {
    var albumsQuery = '';
    if(args[0]) {
        albumsQuery = `select * from "Album" where "${Object.keys(args)[0]}" = ${args[Object.keys(args)[0]]}`
    } else {
        albumsQuery = 'select * from "Album"';
    }
    return psql.manyOrNone(albumsQuery, [], function(e){
        return e
    });
}

module.exports = {
    albums: getAlbums
}

