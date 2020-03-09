import API from '@/api/index.js'

let blogAPI = new API('blog');
export default {
    props: {
        blogId: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            blog: {}
        }
    },
    async created() {
        let data = await this.getBlogDetail();
        this.setBlogDetail(data);
    },
    methods: {
        getBlogDetail() {
            return blogAPI.getBlog(this.blogId)
                   .then(({ data }) => {
                        return Promise.resolve(data.data);
                   })
        },
        setBlogDetail(data) {
            this.blog = data;
        }
    }
}