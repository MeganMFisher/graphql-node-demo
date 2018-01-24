var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
var coursesData = require('./data');
var customerData = require('./customerData')

const pgPromise = require('pg-promise');

const connStr='postgres://ihmuaxakmsscav:1aba5aca9ded1b6763ec05249366252dfc185e5d44e68a9fad43b7dd71d7d3fb@ec2-23-21-231-58.compute-1.amazonaws.com:5432/d29tk306ol75s6?ssl=true'; // add your psql details


const pgp = pgPromise({}); // empty pgPromise instance
const psql = pgp(connStr);

console.log(psql) 

// GraphQL schema
var schema = buildSchema(`
    input CourseInput {
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
        users: [User]
    },
    type Mutation {
        createCourse(input: CourseInput): Course
        updateCourseTopic(id: Int!, topic: String!): Course
        updateCourseDesc(id: Int!, description: String!): Course
        deleteCourse(id: Int!): Course
    }
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
    type User {
        id: Int
        name: String,
        email: String
    }
`);

  

var getCourse = function(args) { 
    var id = args.id;
    return coursesData.filter(course => {
        return course.id == id;
    })[0];
}

var getUsers = function(args) {
        const usersQuery = 'select id, name, email from users';
        return psql.manyOrNone(usersQuery, [], function(e){
          return e
        });
}



var root = {
    users: getUsers,
    course: getCourse
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));


