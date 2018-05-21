const { GraphQLObjectType, GraphQLSchema } = require('graphql'),
      query = require('./query'),
      mutation = require('./mutation');

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: query
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation
    })
});