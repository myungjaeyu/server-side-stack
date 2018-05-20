const R = require('rambda'),
      { memo } = require('../orm');

const create = (req, res) => memo.create(req.body.title, req.body.body)
                                .then(memo => res.json({ 
                                    body : req.body,
                                    data : memo 
                                }));

const selects = (req, res) => memo.selects()
                                .then(memos => res.json({ 
                                    data : memos 
                                }))
                                .catch(e => res.json({}));;

const select = (req, res) => memo.select(req.params.id)
                                .then(memo => res.json({
                                    id : req.params.id, 
                                    data : memo.dataValues 
                                }))
                                .catch(e => res.json({}));

const update = (req, res) => memo.update(req.params.id, req.body)
                                .then(memo => res.json({
                                    id : req.params.id, 
                                    data : req.body 
                                }))
                                .catch(e => res.json({}));;

const remove = (req, res) => memo.remove(req.params.id)
                                .then(isRemoved => res.json({
                                    id : req.params.id, 
                                    isRemoved : !!isRemoved
                                }))
                                .catch(e => res.json({}));

module.exports = {
    create,
    selects,
    select,
    update,
    remove
};