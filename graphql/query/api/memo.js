const { GraphQLInt, GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql'),
      MemoType = require('../../model/type/Memo'),
      { memo } = require('../../../orm')

module.exports = {
    memo : {
        type: MemoType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLInt)
            }
        },
        resolve : (root, args) => memo.select(args.id)
    },
    memos : {
        type: new GraphQLList(MemoType),
        args: {},
        resolve : _ => memo.selects()
    }
};