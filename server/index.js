const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// load Schema and Resolver
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const app = express();

server.applyMiddleware({app});

app.listen({ port: 4005} , () => 
    console.log(`sever runing at: http://localhost:4005${server.graphqlPath}`)
        );
