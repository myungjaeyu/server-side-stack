const { GraphQLInt, GraphQLString, GraphQLNonNull, GraphQLInputObjectType } = require('graphql'),
      MemoType = require('../../model/type/Memo'),
      MemoInput = require('../../model/input/Memo'),
      { memo } = require('../../../orm')

module.exports = {
    createMemo : {
        type: MemoType,
        args: {
            memo: MemoInput
        },
        resolve : (root, args) => memo.create(args.memo.title, args.memo.body)
    },
    updateMemo : {
        type: MemoType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLInt)
            },
            memo : MemoInput
        },
        resolve : (root, args) => memo.update(args.id, args.memo)
                                        .then(e => ({ id : args.id, ...args.memo }))
    },
    removeMemo : {
        type: MemoType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLInt)
            }
        },
        resolve : (root, args) => memo.remove(args.id)
                                        .then(e => ({ id : args.id }))
    }
};