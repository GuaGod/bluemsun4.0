const API = require('../backend/index');
const SuccessModel = require('../instance/SuccessModel');
const ErrorModel = require('../instance/ErrorModel');
const { mapProperty } = require('../helpers/mapProperty');
const axios = require('../backend/createAxios.js')

let api = new API('user');

function login(req, res) {
    return api.login(req.body)
              .then((obj) => {
                  let data = obj.data;
                  let headers = obj.headers;
                  axios.defaults.headers.common['Cookie'] = headers['set-cookie'][0].split(';')[0];
                  res.append('Set-Cookie', headers['set-cookie']);
                   
                  let responseData = mapProperty(data, {
                      headUrl: 'img',
                      userId: 'stuId',
                      username: 'name',
                  })
                
                  return Promise.resolve(new SuccessModel(responseData));
              }, (error) => {
                console.log(error);
                return Promise.resolve(new ErrorModel(error, '后端返回出错'));
              }).catch((error) => {
                console.log(error);
                return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
              })
}

module.exports = {
    login
}