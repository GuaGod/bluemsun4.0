const express = require('express');
const userService = require('../services/user');
const router = express.Router();

router.post('/login', (req, res, next) => {
    return userService.login(req)
                      .then((data) => {
                        res.end(JSON.stringify(data));
                      }, (error) => {
                        console.log('qwewqewqewqe');
                        console.log(error);
                      })
})

module.exports = router;