const psql = require('../../dbConnection');

var getPlaylistTracks = function(args) {
    const playlistTracksQuery = 'select * from "PlaylistTrack"';
    return psql.manyOrNone(playlistTracksQuery, [],  (e) => e )
}

var getMusicPlayListTracks = function(args) {
    const musicPlaylistQuery = `SELECT "PlaylistTrack"."TrackId" FROM "PlaylistTrack"  JOIN "Playlist"  ON "Playlist"."PlaylistId" = "PlaylistTrack"."PlaylistId" WHERE "Playlist"."Name" = 'Music';`
    return psql.manyOrNone(musicPlaylistQuery, [], (e) => e )
}

module.exports = {
    playlistTracks: getPlaylistTracks,
    musicPlayListTracks: getMusicPlayListTracks 
}

// SELECT * FROM "PlaylistTrack" WHERE "PlaylistId" = ( SELECT "PlaylistId" FROM "Playlist" WHERE "Name" = ;'Music' )