const psql = require('../../dbConnection');

var getTracks = function(args) {
    const tracksQuery = 'select * from "Track"';
    return psql.manyOrNone(tracksQuery, [], function(e){
        // console.log(e)
        return e
    });
}

module.exports = {
    tracks: getTracks
}