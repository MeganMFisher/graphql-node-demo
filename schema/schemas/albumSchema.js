
module.exports = {
    query: 'albums: [Album]',
    type: `
    type Album {
        AlbumId: Int
        Title: String,
        ArtistId: Int
    }`
}