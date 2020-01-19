module.exports = function(req, res, next) {
  console.log(req.headers.origin)
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}