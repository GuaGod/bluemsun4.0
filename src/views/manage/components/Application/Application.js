import API from '@/api/index.js'

let manageAPI = new API('manage');
export default {
    data() {
        return {
            columns: [
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '专业',
                    key: 'major'
                },
                {
                    title: '面试岗位',
                    key: 'major'
                },
                {
                    title: '学生号',
                    key: 'stuId'
                },
                {
                    title: '手机号',
                    key: 'phone'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 100,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.getApplicationDetail(params.row.stuId);
                                    }
                                }
                            }, '详情'),
                        ]);
                    }
                }
            ],
            currentPage: 1,
            total: 0,
            applicationArray: []
        }
    },
    created() {
        this.goto(1);
    },
    methods: {
        goto(pageNum) {
            return manageAPI.getApplicationList({
                pageNum: pageNum
            }).then(({data}) => {
                data = data.data;
                this.applicationArray = data.list;
                this.total = data.total;
            })
        },
        onChangePage(pageNum) {
            this.goto(pageNum);
        },
        _getApplicationDetail(id) {
            return manageAPI.getApplicationDetail({
                stuId: id
            }).then(({data}) => {
                return Promise.resolve(data.data);
            })
        },
        _createApplicationTemplate(ap) {
            let res = {}
            res.title = ap.name + '的报名信息';
            res.content = `
            <div style="display:flex;align-items:center">
                <img src="${ap.photo}" style="height:108px;width:100px;"></img>
                <div style="margin-top:4px;">
                    <p>姓名：${ap.name}</p>
                    <p>专业：${ap.major}</p>
                    <p>性别：${ap.sex}</p>
                    <p>面试岗位：${ap.jobInterview}</p>
                </div>
            </div>
                <p>技能：${ap.skill.split('&').join(' ')}</p>
                <p>自我介绍：${ap.selfInfo}</p>
                <p>年级：${ap.grade}</p>
                <p>年龄：${ap.age}</p>
                <p>学生卡号：${ap.stuId}</p>
                <p>手机号：${ap.phone}</p>
                <p>QQ：${ap.qq}</p>
                <p>email：${ap.email}</p>
                <p>寝室：${ap.dormitory}</p>
            `;

            return res;
        },
        async getApplicationDetail(id) {
            let data = await this._getApplicationDetail(id);
            let template = this._createApplicationTemplate(data);

            this.$Modal.confirm({
                title: template.title,
                content: template.content,
            });
        },
        async onClickOpenApply() {
            let { data } = await manageAPI.openApplication()
            this.$Notice.info({
                title: data.msg
            })
        },
        async onClickCloseApply() {
            let { data } = await manageAPI.closeApplication()
            this.$Notice.info({
                title: data.msg
            })
        },
    }
}