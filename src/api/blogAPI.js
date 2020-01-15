import base from './config.js'
import axios from 'axios'

let baseUrl = `${base.remote}:${base.port}/blog`;

export default {
    getList(data) {
        let url = `${baseUrl}/getList`;

        return axios.get(url, {
            params: data
        });
    },

    getListTitle(data) {
        let url = `${baseUrl}/getListTitle`;

        return axios.get(url, {
            params: data
        }) 
    }
}