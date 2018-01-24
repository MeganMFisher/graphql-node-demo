const psql = require('../../dbConnection');

var getPlaylists = function(args) {
    const playlistsQuery = 'select * from "Playlist"';
    return psql.manyOrNone(playlistsQuery, [], function(e){
        // console.log(e)
        return e
    });
}

module.exports = {
    playlists: getPlaylists
}