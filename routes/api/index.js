const express = require('express'),
      router = express.Router();

const api = (orm) => {

      orm.authenticate()
          .then(console.log('Connection has been established successfully.'))
          .catch(err => console.error('Unable to connect to the database:', err));

      router.get('/test/:no', (req, res) => res.json({no : req.params.no, data : req.body }));

      return router;
};

module.exports = api;