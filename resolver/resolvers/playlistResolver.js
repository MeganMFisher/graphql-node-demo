const psql = require('../../dbConnection');

var getPlaylists = function(args) {
    const playlistsQuery = 'select * from "Playlist"';
    return psql.manyOrNone(playlistsQuery, [], function(e){
        return e
    });
}

module.exports = {
    playlists: getPlaylists
}