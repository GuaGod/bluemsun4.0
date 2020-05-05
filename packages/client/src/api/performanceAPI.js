import base from './config.js'
import axios from 'axios'

let baseUrl = `${base.remote}:${base.port}/performance`;

export default {
    submit(data) {
        let url = `${baseUrl}/login`;

        return axios.post(url, data);
    }
}