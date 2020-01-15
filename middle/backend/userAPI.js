let base = require('./config.js');
let axios = require('axios');
let {transfromJ2F} = require('../helpers/transformJSON');
let qs = require('qs');

let baseUrl = `${base.remote}:${base.port}/user`;


let userAPI = {
    login(data) {
        let url = `${baseUrl}/login`;
        return axios.post(url, qs.stringify(data), {headers: {'Content-Type': 'application/x-www-form-urlencoded;'}})
        .then(data => {
            return Promise.resolve(data);
        })
        .catch(error => {
            console.log(error);
        })
    }
}

module.exports = userAPI;