import base from './config.js'
import axios from 'axios'

let baseUrl = `${base.remote}:${base.port}/blog`;

export default {
    getListTitle(data) {
        let url = `${baseUrl}/getListTitle`;
         
        return axios.get(url, {
            params: data
        }) 
    },

    /**
     * @method getTopHotList 获取点击量最高的前几位博客
     * @param { Object } data  num Number 
     */

    getTopHotList(data) {
        let url = `${baseUrl}/getTopHotList`;

        return axios.get(url, {
            params: data
        })
    },

    /**
     * @method 根据数据获取博客列表（详细）
     * data
     * @param {*} method    通过keyword还是blogClass获取 
     * @param {*} value     keyword或者blogClass的值
     * @param {*} pageNum   第几页
     */
    getList(data) {
        let url = `${baseUrl}/getList`
        
        return axios.get(url, {
            params: data 
        })
    }
}