import axios from 'axios'
import { mixin } from '../helpers/mixin'
import config from './config'
import blogAPI from './blogAPI'
import userAPI from './userAPI'

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
       }
    }

    get(url, config) {
        return axios.get(url, config);
    }

    post(url, config) {
        return axios.post(url, config);
    }   
}
