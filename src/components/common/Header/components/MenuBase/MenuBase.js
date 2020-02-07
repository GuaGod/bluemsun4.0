import { mapState } from "vuex"

export default {
    computed: {
        ...mapState({
            username: state => {
              return state.common.username;
            },
            headUrl: state => {
              return state.common.headUrl;
            },
            userId: state => {
                return state.common.userId;
            }
          }),
    },
    methods: {
        onClickSelfInformation() {

        },
        onClickSelfBlog() {

        },
        onClickWriteBlog() {

        },
        onClickConsole() {
            console.log('clickConsole')
        },
        onClickNotice() {

        },
        onClickQuit() {

        }
    }
};