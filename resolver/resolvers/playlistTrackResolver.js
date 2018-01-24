const psql = require('../../dbConnection');

var getPlaylistTracks = function(args) {
    const playlistTracksQuery = 'select * from "PlaylistTrack"';
    return psql.manyOrNone(playlistTracksQuery, [], function(e){
        // console.log(e)
        return e
    });
}

module.exports = {
    playlistTracks: getPlaylistTracks
}