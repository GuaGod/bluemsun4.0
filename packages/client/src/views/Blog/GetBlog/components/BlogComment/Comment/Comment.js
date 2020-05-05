import API from '@/api/index.js'
let blogAPI = new API('blog');

export default {
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            commentChildren: [],
            total: 0,
            pageNum: 1,
        }
    },
    computed: {
        tip() {
            if(this.total === 0) {
                return '暂无回复'
            }
            if(this.showNum === this.total) {
                return '收起回复'
            } else {
                return '更多回复'
            }
        },
        hasMore() {
            if(this.showNum === this.total) {
                return false;
            } else {
                return true;
            }
        },
        showNum() {
            return this.commentChildren.length;
        }
    },

    created() {
        this.commentChildren = this.comment.children.list;
        this.commentChildren.forEach(item => {
            item.isReplyShow = false;
            item.replyContent = ''
        })
        this.total = this.comment.children.total;
    },

    methods: {
        //根据id 拿到commentChildren 对象
        searchCommentChildren(id) {
            for(let i = 0, length = this.commentChildren.length; i < length; i++) {
                if(this.commentChildren[i].id === id) {
                    return this.commentChildren[i];
                }
            }
        },

        getMoreCommentChildren(commentId) {
            return blogAPI.getCommentChildren({
                commentId,
                pageNum: ++this.pageNum
            }).then(({data}) => {
                return Promise.resolve(data);
            })
        },

        handleCommentChildren(data) {
            this.total = data.total;
            this.commentChildren = this.commentChildren.concat(data.list);
            this.$forceUpdate();
        },

        async onClickTip({ target }) {
            if(this.total === 0) {
                return ;
            }
            let commentId = target.dataset.id;
            if(this.hasMore) {
                let data = await this.getMoreCommentChildren(commentId);
                this.handleCommentChildren(data);
            } else {
                this.commentChildren = [];
                this.pageNum = 0;
                this.$forceUpdate()
            }
        },
        onClickReply({ target }) {
            let id = Number(target.dataset.id);
            let comment = this.searchCommentChildren(id);
            
            let oldState = comment.isReplyShow;
            comment.isReplyShow = !oldState;
            this.$forceUpdate();
        },
        async onClickSubmitReply({ target }) {
            let id = Number(target.dataset.id);
            let comment = this.searchCommentChildren(id);
 
            let message = await blogAPI.replyComment({
                commentId: comment.commentId,
                id,
                content: comment.replyContent
            }).then(({data}) => {
                return Promise.resolve(data.message);
            })

            this.$Message.info(message);

            this.comment.replyContent = ''
            
            let oldState = comment.isReplyShow;
            comment.isReplyShow = !oldState; 
            this.$forceUpdate();
        }
    }
}