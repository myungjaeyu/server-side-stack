const Memo = require('../model/Memo');

const create = (title, body) => Memo.create({ title : title, body : body });

const selects = () => Memo.findAll();
const select = (id) => Memo.findOne({ where: { id : id }});
const update = (id, opts = {}) => Memo.update(opts, { where: { id : id }});
const remove = (id) => Memo.destroy({ where: { id : id }}); 

module.exports = {
    create,
    selects,
    select,
    update,
    remove
};