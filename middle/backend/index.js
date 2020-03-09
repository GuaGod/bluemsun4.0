const axios = require('axios');
const { mixin } = require('../helpers/mixin');
const config = require('./config');
const blogAPI = require('./blogAPI');
const userAPI = require('./userAPI');
const manageAPI = require('./manageAPI');

class API {
    constructor(...args) {
       this.baseUrl = config.remote;
       for(let i = 0, length = args.length; i < length; i++) {
           this.baseUrl += '/' + args[i];
       }     

       let apiRoute = args[0];
       switch(apiRoute) {
           case 'blog': mixin(this, blogAPI); break;
           case 'user': mixin(this, userAPI); break;
           case 'manage': mixin(this, manageAPI); break;
       }
    }

    get(url, config) {
        return axios.get(url, config);
    }

    post(url, config) {
        return axios.post(url, config);
    }   
}

module.exports = API;