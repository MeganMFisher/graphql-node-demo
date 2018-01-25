const psql = require('../../dbConnection');


var getArtists = function(args) {
    const artistQuery = 'select * from "Artist"';
    return psql.manyOrNone(artistQuery, [], function(e){
        return e
    });
}

var createArtist = function(args) {
    const {ArtistId, Name} = args.input
    const artistQuery = `insert into "Artist"("ArtistId", "Name") Values(${ArtistId}, '${Name}') returning *;`
    return psql.one(artistQuery)
}

var updateArtist = ({ArtistId, Name}) => {
    return psql.one(`update "Artist" set "Name" = '${Name}' where "ArtistId" = ${ArtistId} returning *`)
}

var deleteArtist = function({ArtistId}) {
    const artistQuery = `delete from "Artist" where "ArtistId" = ${ArtistId} returning *;`
    return psql.one(artistQuery)
}

module.exports = {
    artists: getArtists,
    createArtist: createArtist,
    updateArtist: updateArtist,
    deleteArtist: deleteArtist
}