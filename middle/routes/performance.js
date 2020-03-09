const express = require('express');
const blogService = require('../services/blog')
const router = express.Router();

router.get('/submit', (req, res, next) => {
  return blogService.getList(req.query)
    .then(data => {
      res.end(JSON.stringify(data));
    }, error => {
      res.end(JSON.stringify(error));
    });
})

module.exports = router; 