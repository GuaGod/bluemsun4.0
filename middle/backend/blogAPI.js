let base = require('./config.js');
let axios = require('axios');

let baseUrl = `${base.remote}:${base.port}/blog`;

let blogAPI = {
    findPageBlogByHit(data = {
        blogClass: 'hit',
        pageNum: 1,
    }) {
        let url = `${baseUrl}/findPageBlogByHit`;

        return axios.get(url, {
            params: data
        });
    },
    findBlogByKeyWord(data = {
        keyword: '',
        pageNum: 1,
    }) {
        let url = `${baseUrl}/findBlogByKeyWord`;

        return axios.get(url, {
            params: data
        })
    },
    findPageBlogByBlogClass(data = {
        blogClass: '',
        pageNum: 1,
    }) {
        let url = `${baseUrl}/findBlogByBlogClass`;
 
        return axios.get(url, {
            params: data
        })
    }
}

module.exports = blogAPI;