const express = require('express');
const { ApolloServer } = require('apollo-server-express');
//import database
const { connectDB } = require('./db/db');

// load Schema and Resolver
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');
// import method to pull data from mongodb
const { controllers } = require('./controllers');
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: controllers,
})

const app = express();

connectDB();

server.applyMiddleware({app});

app.listen({ port: 4005} , () => 
    console.log(`sever runing at: http://localhost:4005${server.graphqlPath}`)
        );
