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
     * @param { 'keyword' | 'class' | 'hit' } method    通过keyword还是class(blogClass) hit获取 
     * @param { string } value     keyword或者blogClass hit的值
     * @param { number } pageNum   第几页
     */
    getList(data) {
        let url = `${baseUrl}/getList`
        
        return axios.get(url, {
            params: data 
        })
    },

    /**
     * @method 根据博客id获取博客详细信息
     * @param { number } id 博客的id号
     */
     getBlog(id) {
         let url = `${baseUrl}/getBlog`

         return axios.get(url, {
             params: {
                 id: id
             }
         });
     },

     /**
      * @method 根据博客id获取博客的评论
      * @param { object: {id: number, pageNum: number} } data 博客id以及第几页评论 
      */
    getBlogComment(data) {
        let url = `${baseUrl}/getBlogComment`

        return axios.get(url, {
            params: data
        });
    },

    /**
     * @method 获取子评论
     * @param { object: {commentId: number, pageNum: number}} data 父博客id
     */
    getCommentChildren(data) {
        let url = `${baseUrl}/getCommentChildren`;

        return axios.get(url, {
            params: data
        })
    },

    replyBlog(data) {
        let url = `${baseUrl}/replyBlog`;

        return axios.post(url, data)
    },

    replyComment(data) {
        let url = `${baseUrl}/replyComment`;

        return axios.post(url, data);
    }
}