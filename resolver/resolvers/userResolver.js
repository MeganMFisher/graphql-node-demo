const psql = require('../../dbConnection');

var getUsers = function(args) {
    const usersQuery = 'select id, name, email from users';
    return psql.manyOrNone(usersQuery, [], function(e){
        return e
    });
}

module.exports = {
    users: getUsers
}