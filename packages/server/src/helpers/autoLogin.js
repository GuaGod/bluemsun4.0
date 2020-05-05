const devConfig = require('../config/dev.config');
const axios = require('../backend/createAxios');
const API = require('../backend/index');
require('babel-polyfill')

async function autoLogin() {
    let loginState = devConfig.state;
    let userAPI = new API('user');

    let loginRes = await userAPI.login(loginState);
    let data = loginRes.data;
    let headers = loginRes.headers;
    axios.defaults.headers.common['Cookie'] = headers['set-cookie'][0].split(';')[0];

    return data;
}

module.exports = {
    autoLogin
}
