const express = require('express');
const blogService = require('../services/blog')
const router = express.Router();

router.get('/getList', (req, res, next) => {
    return blogService.getList(req.query)
                      .then(data => {
                        res.end(JSON.stringify(data));
                      }, error => {
                        res.end(JSON.stringify(error));
                      });
})

router.get('/getListTitle', (req, res, next) => {
    return blogService.getListTitle(req.query)
                      .then(data => {
                        res.end(JSON.stringify(data));
                      }, error => {
                        res.end(JSON.stringify(error));
                      })
})

module.exports = router; 