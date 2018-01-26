const psql = require('../../dbConnection');

var getAlbums = function(args) {
    var albumsQuery = '';
    if(args[0]) {
        albumsQuery = `select * from "Album" where "${Object.keys(args)[0]}" = ${args[Object.keys(args)[0]]}`
    } else {
        albumsQuery = 'select * from "Album"';
    }
    return psql.manyOrNone(albumsQuery, [], function(e){
        return e
    });
}

var createAlbum = async function(args){
    var albumsQuery = ''
    let id = await psql.manyOrNone('select count(*) from "Album"', [], function(e){
        return e
    });
    id = +id[0].count + 1
    albumsQuery = `insert into "Album" ("AlbumId", "Title", "ArtistId") values (${id}, '${args.input.Title}', ${args.input.ArtistId}); select * from "Album" where "AlbumId" = ${id}`
    return psql.manyOrNone(albumsQuery, [], function(e){
        return e
    });
}

var updateAlbum = function(args){
    var albumsQuery = ''
    let update = `set `
    if(args.title){
        update += `"Title" = '${args.title}'`
        if(args.artistId){
            update += `, "ArtistId" = ${args.artistId}`
        }
    } else {
        if(args.artistId){
            update += `"ArtistId" = ${args.artistId}`
        }
    }
    albumsQuery = `update "Album" ${update} where "AlbumId" = ${args.id}`
    return psql.manyOrNone(albumsQuery, [], function(e){
        return e
    });
}

var deleteAlbum = function(args){
    albumsQuery = `delete from "Album" where "AlbumId" = ${args.id}`;
    return psql.manyOrNone(albumsQuery, [], function(e){
        return e
    });
}

module.exports = {
    albums: getAlbums,
    createAlbum: createAlbum,
    deleteAlbum: deleteAlbum,
    updateAlbum: updateAlbum

}

