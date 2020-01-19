import MyHeader from '@/components/common/Header/Header.vue'
import Production from '@/components/home/Production/Production.vue'
import MyFooter from '@/components/common/Footer/Footer.vue'
import Banner from '@/components/home/Banner/Banner.vue'
import Blog from '@/components/home/Blog/Blog.vue'

export default {
    components: {
        MyHeader,
        Production,
        MyFooter,
        Banner,
        Blog,
    },
    data() {
        return {
          headerState: 'init',
        }
    },
    mounted() {

    },
}