/**
 * 博客系统 论坛区
 * 切换帖子的组件
 */
import InvitationItem from '@/components/common/InvitationItem/InvitationItem.vue'
import Service from './service.js'

export default {
    components: {
        InvitationItem
    },
    data() {
        return {
            invitationArray: [],
            currentPage: 1,
            totalPage: 10,
            total: 100,
            method: 'class',
            value: '前端',
            searchContent: '',
            pageNum: 1,
        }
    },
    created() {
        let that = this;
        async function flow() {
            that._service = new Service();
            let data = await that._getNowData();
            that._handleReturnData(data);
        }

        flow();
    },
    methods: {
        /**
         * 根据现有的method pageNum value
         */
        _getNowData(method = this.method, value = this.value, pageNum = this.pageNum) {
            return this._service.getBlog(method, value, pageNum)
                       .then(({ data }) => {
                           return Promise.resolve(data.data);
                       })
        },
        _handleReturnData(data) {
            this.currentPage = data.pageNum;
            this.invitationArray = data.list;
            this.total = data.total;
            console.dir(JSON.stringify(this.invitationArray))
        },
 
        onChangePage(pageNum) {
            let that = this; 

            async function flow() {
                that.pageNum = pageNum;
                let data = await that._getNowData();
                that._handleReturnData(data);
            }
            
            flow();
        },

        onClickSearch() {
            let that = this;

            async function flow() {
                that.method = 'keyword';
                that.value = that.searchContent;
                that.pageNum = 1;
                let data = await that._getNowData();
                console.log(data);
                that._handleReturnData(data);
            }

            flow();
        },
        onClickTab: function(tab) {
            let tabMap = new Map([
                ['前端', {method: 'class', value: '前端'}],
                ['后端', {method: 'class', value: '后端'}],
                ['热度', {method: 'hit', value: 'hit'}]
            ])

            return function(tab) {
                let that = this;
            
                async function flow() {
                    let { method, value } = tabMap.get(tab);
                    that.method = method;
                    that.value = value;
                    that.pageNum = 1;
                    
                    let data = await that._getNowData();
                    that._handleReturnData(data);
                }
    
                flow();
            }
        }(),
    }
}