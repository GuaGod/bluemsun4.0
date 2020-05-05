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

router.get('/getTopHotList', (req, res, next) => {
  return blogService.getTopHotList(req.query)
    .then(data => {
      res.end(JSON.stringify(data));
    }, error => {
      res.end(JSON.stringify(error));
    })
})

router.get('/getBlog', (req, res, next) => {
  return blogService.getBlog(req.query)
    .then(data => {
      res.end(JSON.stringify(data));
    }, error => {
      res.end(JSON.stringify(error));
    })
})

router.get('/getBlogComment', (req, res, next) => {
  return blogService.getBlogComment(req.query)
    .then(data => {
      res.end(JSON.stringify(data));
    }, error => {
      res.end(JSON.stringify(error));
    })
})

router.get('/getCommentChildren', (req, res, next) => {
  return blogService.getCommentChildren(req.query)
    .then(data => {
      res.end(JSON.stringify(data));
    }, error => {
      res.end(JSON.stringify(error));
    })
})

router.post('/replyBlog', (req, res, next) => {
  return blogService.replyBlog(req.body, req.headers.cookie)
  .then(data => {
    res.end(JSON.stringify(data));
  }, error => {
    res.end(JSON.stringify(error));
  })
})

router.post('/replyComment', (req, res, next) => {
  return blogService.replyComment(req.body, req.headers.cookie)
  .then(data => {
    res.end(JSON.stringify(data));
  }, error => {
    res.end(JSON.stringify(error));
  })
})

router.post('/writeBlog', (req, res, next) => {
  return blogService.writeBlog(req.body)
  .then(data => {
    res.end(JSON.stringify(data));
  }, error => {
    res.end(JSON.stringify(error));
  })
})

router.post('/updateBlog', (req, res, next) => {
  return blogService.updateBlog(req.body)
  .then(data => {
    res.end(JSON.stringify(data));
  }, error => {
    res.end(JSON.stringify(error));
  })
})

router.get('/deleteBlog', (req, res, next) => {
  return blogService.deleteBlog(req.params)
  .then(data => {
    res.end(JSON.stringify(data));
  }, error => {
    res.end(JSON.stringify(error));
  })
})

module.exports = router; 