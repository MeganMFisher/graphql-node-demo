
module.exports = {
    query: 'playlistTracks: [PlaylistTrack]',
    musicPlaylistTracks: 'musicPlayListTracks: [MusicPlayListTrack]',
    type: `
    type PlaylistTrack {
        PlaylistId: Int
        TrackId: Int
    }
    `,
    musicPlayListTracksType: `
    type MusicPlayListTrack {
        TrackId: Int

    }`
}