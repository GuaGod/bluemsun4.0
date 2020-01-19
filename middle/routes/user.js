const express = require('express');
const userService = require('../services/user');
const router = express.Router();

router.post('/login', (req, res, next) => {
    return userService.login(req, res)
                      .then((data) => {
                        res.end(JSON.stringify(data));
                      }, (error) => {
                        console.log(error);
                      })
})

module.exports = router;