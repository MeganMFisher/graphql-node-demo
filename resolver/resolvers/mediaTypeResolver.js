const psql = require('../../dbConnection');

var getMediaTypes = function(args) {
    const mediaTypesQuery = 'select * from "MediaType"';
    return psql.manyOrNone(mediaTypesQuery, [], function(e){
        console.log(e)
        return e
    });
}

module.exports = {
    mediaTypes: getMediaTypes
}