import axios from 'axios'
import { mixin } from '../helpers/mixin'
import config from './config'
import blogAPI from './blogAPI'
import userAPI from './userAPI'
import manageAPI from './manageAPI'
import performanceAPI from './performanceAPI'
import qs from 'qs'

axios.defaults.withCredentials = true;
axios.defaults.headers['content-type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(
    config => {
        if(config.method === 'post') {
            config.data = qs.stringify(config.data);
        }

        return config;
    }, (error) => {
        return Promise.reject(error);
    }
)

export default class API {
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
           case 'performance': mixin(this, performanceAPI); break;
       }
    }

    get(url, config) {
        return axios.get(url, config);
    }

    post(url, config) {
        return axios.post(url, config);
    }   
}

 