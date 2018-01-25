
module.exports = {
    query: 'playlistTracks: [PlaylistTrack]',
    type: `
    type PlaylistTrack {
        PlaylistId: Int
        TrackId: Int
    }
    `
}