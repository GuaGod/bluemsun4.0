import MyHeader from '@/components/common/Header/Header.vue'
import MyFooter from '@/components/common/Footer/Footer.vue'
import NavigateBlock from '@/components/common/NavigateBlock/NavigateBlock.vue'
import HotBlogs from '@/components/common/HotBlogs/HotBlogs.vue'
import BlogReader from './components/BlogReader/BlogReader.vue'
import BlogComment from './components/BlogComment/BlogComment.vue'

export default {
    components: {
        MyHeader,
        MyFooter,
        NavigateBlock,
        HotBlogs,
        BlogReader,
        BlogComment
    },
    data() {
        return {
            
        }
    },
    created() {
        let id = this.$route.params.id;
        this.blogId = Number(id);
    },
    methods: {
        getBlog() {
            
        }
    }
}