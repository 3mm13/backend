const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Emily Channy');
});

module.exports = routes;