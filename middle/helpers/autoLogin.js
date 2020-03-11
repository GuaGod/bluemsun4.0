let axios = require('../backend/createAxios');

function autoLogin(cookie) {
    axios.defaults.headers.common['Cookie'] = 'JSESSIONID=' + cookie;
}

module.exports = {
    autoLogin
}
