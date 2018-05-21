const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'MemoType',
    fields: ({
        id: { type: GraphQLInt, resolve: memo => memo.id },
        title: { type: GraphQLString, resolve: memo => memo.title },
        body: { type: GraphQLString, resolve: memo => memo.body },
    })
});