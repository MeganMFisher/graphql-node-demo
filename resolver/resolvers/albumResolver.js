const psql = require('../../dbConnection');

var getAlbums = function(args) {
    var albumsQuery = '';
    if(Object.keys(args)[0]) {
        albumsQuery = `select * from "Album" where "${Object.keys(args)[0]}" = '${args[Object.keys(args)[0]]}'`
    } else {
        albumsQuery = 'select * from "Album"';
    }
    return psql.manyOrNone(albumsQuery);
}

var createAlbum = async function(args){
    var albumsQuery = ''
    let ids = await psql.manyOrNone('select "AlbumId" from "Album"');
    let max = 0
    ids.map(e => {
        if (e.AlbumId > max) max = e.AlbumId
    })
    max = +max + 1
    albumsQuery = `insert into "Album" ("AlbumId", "Title", "ArtistId") values (${max}, '${args.input.Title}', ${args.input.ArtistId}) returning *;`
    return psql.one(albumsQuery);
}

var updateAlbum = function(args){
    var albumsQuery = ''
    let update = `set `
    Object.keys(args).map((e, i) => {
        if(e !== 'id'){
            let type = typeof args[e]
            update += `${i !== 1 ? ', ' : ''}"${e}" = ${type === 'number' ? args[e] : `'${args[e]}'`}`
        }
    })
    albumsQuery = `update "Album" ${update} where "AlbumId" = ${args.id} returning *;`
    return psql.one(albumsQuery);
}

var deleteAlbum = function(args){
    albumsQuery = `delete from "Album" where "AlbumId" = ${args.id} returning *`;
    return psql.one(albumsQuery);
}

module.exports = {
    albums: getAlbums,
    createAlbum: createAlbum,
    deleteAlbum: deleteAlbum,
    updateAlbum: updateAlbum
}

