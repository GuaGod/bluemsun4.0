export default {
    props: {
        invitation: {
            type: Object,
            default: {
                username: '',
                blogClass: '',
                userId: '',
                blogId: '',
                date: '',
                desc: '',
                readNum: '',
                headUrl: '',
                title: '',
            }
        }
    },
    methods: {
        //点击将访问该博客 根据用户身份不同会有不同的显示 
        onClickArticle() {

        }
    }
}