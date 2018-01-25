const psql = require('../../dbConnection');

var getPlaylistTracks = function(args) {
    const playlistTracksQuery = 'select * from "PlaylistTrack"';
    return psql.manyOrNone(playlistTracksQuery, [],  (e) => e )
}


module.exports = {
    playlistTracks: getPlaylistTracks,
}

// SELECT * FROM "PlaylistTrack" WHERE "PlaylistId" = ( SELECT "PlaylistId" FROM "Playlist" WHERE "Name" = ;'Music' )