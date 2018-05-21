const { orm } = require('../../config');

module.exports = (first, last) => orm.query(
    'SELECT :first + :last AS result', {
    replacements: { 
        first : +first, 
        last : +last 
    }});