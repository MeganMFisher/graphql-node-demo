const psql = require('../../dbConnection');


var getArtists = function(args) {
    const artistQuery = 'select * from "Artist"';
    return psql.manyOrNone(artistQuery, [], function(e){
        return e
    });
}

var createArtist = function(args) {
    const {ArtistId, Name} = args.input
    const artistQuery = `insert into "Artist"("ArtistId", "Name") Values(${ArtistId}, '${Name}');`
    return psql.none(artistQuery)
}

module.exports = {
    artists: getArtists,
    createArtist: createArtist
}