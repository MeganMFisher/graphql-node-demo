require('dotenv').config() 

const express = require('express')
    , express_graphql = require('express-graphql')
    , { buildSchema } = require('graphql')
    , schema = require('./schema/schemaIndex')
    , root = require('./resolver/resolverIndex');


const app = express();

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));


