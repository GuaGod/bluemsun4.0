import API from '@/api/index.js'
let blogAPI = new API('blog')

class Service {
    constructor() {

    }

    /**
     * 
     * @param enum{'class', 'keyword', 'hit'} method 通过keyword还是class来获取博客 
     * @param value{ String } blogClass或者keyword的值
     * @param pageNum{ Number } 第几页
     */
    getBlog(method, value = '', pageNum = 1) {
        return blogAPI.getList({
            method,
            value,
            pageNum
        })
    }
}

export default Service