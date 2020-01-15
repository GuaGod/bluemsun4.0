import MyHeader from '@/components/common/Header/index.vue'
import Production from '@/components/home/Production/index.vue'
import MyFooter from '@/components/common/Footer/index.vue'
import Banner from '@/components/home/Banner/index.vue'
import Blog from '@/components/home/Blog/index.vue'

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