const sum = (orm) => (first, last) => orm.query(
    'SELECT :first + :last AS result', {
    replacements: { 
        first : +first, 
        last : +last 
    }});

module.exports = sum;