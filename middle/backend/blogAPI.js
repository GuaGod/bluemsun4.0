let base = require('./config.js');
let axios = require('axios');

let baseUrl = `${base.remote}:${base.port}/blog`;

let blogAPI = {
    findPageBlogByHit(data) {
        let url = `${baseUrl}/findPageBlogByHit`;

        return axios.get(url, {
            params: data
        });
    }
}

module.exports = blogAPI;