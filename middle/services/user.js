const API = require('../backend/index');
const SuccessModel = require('../instance/SuccessModel');
const ErrorModel = require('../instance/ErrorModel');
const { mapProperty } = require('../helpers/mapProperty');

let api = new API('user');

function login(req) {
    return api.login(req.body)
              .then(({ data }) => {
                  let responseData = mapProperty(data, {
                      headUrl: 'img',
                      userId: 'stuId',
                      username: 'name',
                  })
                
                  return Promise.resolve(new SuccessModel(responseData));
              }, (error) => {
                return Promise.resolve(new ErrorModel(error, '后端返回出错'));
              }).catch((error) => {
                return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
              })
}

module.exports = {
    login
}