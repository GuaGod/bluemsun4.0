const express = require('express');
const manageService = require('../services/manage')
const router = express.Router();

router.get('/getProductionList', (req, res, next) => {
    return manageService.getProductionList(req.query)
        .then(data => {
            res.end(JSON.stringify(data));
        }, error => {
            res.end(JSON.stringify(error));
        });
})

router.get('/getProductionDetail', (req, res, next) => {
    return manageService.getProductionDetail(req.query)
        .then(data => {
            res.end(JSON.stringify(data));
        }, error => {
            res.end(JSON.stringify(error));
        });
})

router.get('/getRegisterList', (req, res, next) => {
    return manageService.getRegisterList(req.query)
        .then(data => {
            res.end(JSON.stringify(data));
        }, error => {
            res.end(JSON.stringify(error));
        });
})

router.get('/passRegister', (req, res, next) => {
    return manageService.passRegister(req.query)
        .then(data => {
            res.end(JSON.stringify(data));
        }, error => {
            res.end(JSON.stringify(error));
        });
})

router.get('/rejectRegister', (req, res, next) => {
    return manageService.rejectRegister(req.query)
        .then(data => {
            res.end(JSON.stringify(data));
        }, error => {
            res.end(JSON.stringify(error));
        });
})

router.get('/getRegisterDetail', (req, res, next) => {
    return manageService.getRegisterDetail(req.query)
        .then(data => {
            res.end(JSON.stringify(data));
        }, error => {
            res.end(JSON.stringify(error));
        });
})

router.get('/getNewsList', (req, res, next) => {
    return manageService.getNewsList(req.query)
        .then(data => {
            res.end(JSON.stringify(data));
        }, error => {
            res.end(JSON.stringify(error));
        });
})

router.get('/getNewsDetail', (req, res, next) => {
    return manageService.getNewsDetail(req.query)
        .then(data => {
            res.end(JSON.stringify(data));
        }, error => {
            res.end(JSON.stringify(error));
        });
})


router.get('/getApplicationList', (req, res, next) => {
    return manageService.getApplicationList(req.query)
        .then(data => {
            res.end(JSON.stringify(data));
        }, error => {
            res.end(JSON.stringify(error));
        });
})

router.get('/getApplicationDetail', (req, res, next) => {
    return manageService.getApplicationDetail(req.query)
        .then(data => {
            res.end(JSON.stringify(data));
        }, error => {
            res.end(JSON.stringify(error));
        });
})

router.get('/operationApplication', (req, res, next) => {
    return manageService.operationApplication(req.query)
        .then(data => {
            res.end(JSON.stringify(data));
        }, error => {
            res.end(JSON.stringify(error));
        });
})

module.exports = router; 