let base = require('./config.js');
let axios = require('./createAxios');
let qs = require('qs');
let baseUrl = `${base.remote}:${base.port}`;
axios.defaults.withCredentials=true;

let manageAPI = {
    findPageSignUp(data) {
        let url = `${baseUrl}/DoRegister/findPageSignUp`;

        return axios.get(url, {
            params: data
        });
    },
    findPageRegister(data) {
        let url = `${baseUrl}/DoRegister/findPageRegister`;

        return axios.get(url, {
            params: data
        });
    },
    getRegisterDetail(data) {
        let url = `${baseUrl}/DoRegister/getRegisterDetail`;

        return axios.get(url, {
            params: data
        });
    },
    examineRegister(data) {
        let url = `${baseUrl}/DoRegister/examineRegister`;

        return axios.get(url, {
            params: data
        })
    },
    findNewsPageByDate(data) {
        let url = `${baseUrl}/news/findNewsPageByDate`;

        return axios.get(url, {
            params: data
        })
    },
    findPageGoodWorks(data) {
        let url = `${baseUrl}/goodWorks/findPageGoodWorks`;

        return axios.get(url, {
            params: data
        })
    }
}

module.exports = manageAPI