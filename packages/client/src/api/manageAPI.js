import base from './config.js'
import axios from 'axios'

let baseUrl = `${base.remote}:${base.port}/manage`;

export default {
    getRegisterList(data) {
        let url = `${baseUrl}/getRegisterList`;

        return axios.get(url, {
            params: data
        })
    },
    getRegisterDetail(data) {
        let url = `${baseUrl}/getRegisterDetail`;

        return axios.get(url, {
            params: data
        })
    },
    passRegister(stuId) {
        let url = `${baseUrl}/passRegister`;

        return axios.get(url, {
            params: {
                stuId,
                operation: 'pass'
            }
        })
    },
    rejectRegister(stuId) {
        let url = `${baseUrl}/rejectRegister`;

        return axios.get(url, {
            params: {
                stuId,
                operation: 'refuse'
            }
        })
    },
    getApplicationList(data) {
        let url = `${baseUrl}/getApplicationList`;

        return axios.get(url, {
            params: data
        })
    },
    getApplicationDetail(data) {
        let url = `${baseUrl}/getApplicationDetail`;

        return axios.get(url, {
            params: data
        })
    },
    openApplication() {
        let url = `${baseUrl}/operationApplication`;

        return axios.get(url, {
            params: {
                operation: 1
            }
        })
    },
    closeApplication() {
        let url = `${baseUrl}/operationApplication`;

        return axios.get(url, {
            params: {
                operation: 0
            }
        })
    },
    getNewsList(data) {
        let url = `${baseUrl}/getNewsList`;

        data.newsClass = 'news';
        return axios.get(url, {
            params: data
        })
    },
    getNoticeList(data) {
        let url = `${baseUrl}/getNewsList`;

        data.newsClass = 'notice'
        return axios.get(url, {
            params: data
        })
    },
    getProductionList(data) {
        let url = `${baseUrl}/getProductionList`;

        return axios.get(url, {
            params: data
        })        
    }
}