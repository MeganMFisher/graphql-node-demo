const psql = require('../../dbConnection');


var getArtists = (args) => {
    var artistQuery = ''
    if(args[Object.keys(args)[0]]) {
        artistQuery = `select * from "Artist" where "${Object.keys(args)[0]}" = ${args[Object.keys(args)[0]] === 'number' ? args[Object.keys(args)[0]] : `'${args[Object.keys(args)[0]] }'`}`
    } else { 
        artistQuery = 'select * from "Artist"';
    }
    return psql.manyOrNone(artistQuery);
}

var createArtist = (args) => {
    const {ArtistId, Name} = args.input
    const artistQuery = `insert into "Artist"("ArtistId", "Name") values(${ArtistId}, '${Name}') returning *;`
    return psql.one(artistQuery)
}

var updateArtist = ({ArtistId, Name}) => {
    return psql.one(`update "Artist" set "Name" = '${Name}' where "ArtistId" = ${ArtistId} returning *`)
}

var deleteArtist = ({ArtistId}) => {
    const artistQuery = `delete from "Artist" where "ArtistId" = ${ArtistId} returning *;`
    return psql.one(artistQuery)
}

module.exports = {
    artists: getArtists,
    createArtist: createArtist,
    updateArtist: updateArtist,
    deleteArtist: deleteArtist
}