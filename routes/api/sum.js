const R = require('rambda'),
      { sum } = require('../../orm')();

const _sum = (req, res) => sum(req.params.no, req.params.no).then(rows => res.json({
                                                                no : req.params.no,
                                                                data : req.body,
                                                                rows : R.pipe(R.head,
                                                                                R.head,
                                                                                R.path('result'))(rows)
                                                            }));

module.exports = _sum;