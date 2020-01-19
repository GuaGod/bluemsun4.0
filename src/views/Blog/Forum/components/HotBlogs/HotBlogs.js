import API from '@/api/index.js'
let blogAPI = new API('blog')
export default {
    data() {
        return {
            blogs: []
        }
    },
    created() {
        blogAPI.getListTitle({
            blogClass: 'hit',
            pageNum: 1
        }).then(({ data }) => {
            this.blogs = data.data.list;
        })
    }
}