let base = require('./config.js');
let axios = require('./createAxios');
let baseUrl = `${base.remote}:${base.port}/blog`;
let qs = require('qs');

axios.defaults.withCredential = true

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
        keyWord: '',
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
    },

    getBlog(data) {
        let url = `${baseUrl}/getBlog`;

        return axios.get(url, {
            params: data
        })
    },

    getComment(data) {
        let url = `${base.remote}:${base.port}/comment/getComment`;

        return axios.get(url, {
            params: data
        })
    },

    getCommentChildren(data) {
        let url = `${base.remote}:${base.port}/comment/findPageReply`;

        return axios.get(url, {
            params: data
        })
    },

    addComment(data) {
        let url = `${base.remote}:${base.port}/comment/addComment`;

        return axios.post(url, data)
    },

    replyComment(data) {
        let url = `${base.remote}:${base.port}/comment/replyComment`;
        return axios.post(url, qs.stringify(data), {headers: {'Content-Type': 'application/x-www-form-urlencoded;'}})
    },
}

module.exports = blogAPI;