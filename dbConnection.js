const pgPromise = require('pg-promise');
const pgp = pgPromise({}); 
const psql = pgp(process.env.CONNECTIONSTRING);


module.exports = psql;