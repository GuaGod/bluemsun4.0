import API from '@/api/index.js'
import Comment from './Comment/Comment.vue'

let blogAPI = new API('blog')
export default {
    components: {
        Comment
    },
    data() {
        return {
            commentArray: [],
            currentPage: 1,
            total: 0
        }
    },
    props: {
        blogId: {
            type: Number,
            required: true
        }
    },
    created() {
        this.gotoPage(1);
    },
    methods: {
        getComment(pageNum) {
            return blogAPI.getBlogComment({
                pageNum: pageNum || this.currentPage,
                id: this.blogId
            }).then((({ data }) => {
                return Promise.resolve(data.data);
            }))
        },
        setComment(data) {
            this.commentArray = data.list;
            this.total = data.total;
        },
        async gotoPage(pageNum) {
            let data = await this.getComment(pageNum);
            this.setComment(data);
        },
        onChangePage(pageNum) {
            this.gotoPage(pageNum);
        }
    }
}