import base from './config.js'
import axios from 'axios'

let baseUrl = `${base.remote}:${base.port}/user`;

export default {
    login(data) {
        let url = `${baseUrl}/login`;

        return axios.post(url, data);
    }
}