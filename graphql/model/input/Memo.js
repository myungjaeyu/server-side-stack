const { GraphQLString, GraphQLInputObjectType } = require('graphql');

module.exports = {
    type: new GraphQLInputObjectType({
        name: 'MemoInput',
        fields: ({
            title: { type: GraphQLString },
            body: { type: GraphQLString }
        })
    })
};