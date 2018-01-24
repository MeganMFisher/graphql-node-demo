const psql = require('../../dbConnection');

var getGenres = function(args) {
    const genreQuery = 'select * from "Genre"';
    return psql.manyOrNone(genreQuery, [], function(e){
        return e
    });
}

module.exports = {
    genres: getGenres
}