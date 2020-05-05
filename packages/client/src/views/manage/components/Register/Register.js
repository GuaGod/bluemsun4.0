import API from '@/api/index.js'

let manageAPI = new API('manage');
export default {
    data() {
        return {
            columns: [
                {
                    title: '姓名',
                    key: 'name',
                    render: (h, params) => {
                        return h('div', [
                            h('Icon', {
                                props: {
                                    type: 'person'
                                }
                            }),
                            h('strong', params.row.name)
                        ]);
                    }
                },
                {
                    title: '年级',
                    key: 'grade'
                },
                {
                    title: '职位',
                    key: 'position'
                },
                {
                    title: '学生卡',
                    key: 'stuId'
                },
                {
                    title: '手机号',
                    key: 'phone'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 200,
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
                                        this.getRegisterDetail(params.row.stuId);
                                    }
                                }
                            }, '详情'),
                            h('Button', {
                                props: {
                                    type: 'success',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.accessRegister(params.row.stuId)
                                    }
                                }
                            }, '通过'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.rejectRegister(params.row.stuId);
                                    }
                                }
                            }, '拒绝')
                        ]);
                    }
                }
            ],
            registerArray: [],
            currentPage: 1,
            total: 0,
        }
    },

    created() {
        this.goto(1);
    },

    methods: {
        goto(pageNum) {
            return manageAPI.getRegisterList({
                pageNum: pageNum
            }).then(({data}) => {
                data = data.data;
                this.total = data.total;
                this.registerArray = data.list;
                this.currentPage = pageNum;
            })
        },
        onChangePage(pageNum) {
            this.goto(pageNum);
        },
        _getRegisterDetail(id) {
            return manageAPI.getRegisterDetail({stuId: id})
                     .then(({ data }) => {
                         return Promise.resolve(data.data);
                     })
        },
        _createRegisterDetailTemplate(rg) {
            let res = {}
            res.title = rg.name + '的注册信息';
            res.content = `
                <p>账号：${rg.username}</p>
                <p>姓名：${rg.name}</p>
                <p>性别：${rg.sex}</p>
                <p>年级：${rg.grade}</p>
                <p>学号：${rg.stuId}</p>
                <p>电话：${rg.phone}</p>
                <p>职位：${rg.position}</p>
            `

            return res;
        },
        async getRegisterDetail(id) {
            let resigterDetail = await this._getRegisterDetail(id);
             
            let template = this._createRegisterDetailTemplate(resigterDetail);

            this.$Modal.confirm({
                title: template.title,
                content: template.content,
            });
        },
        accessRegister(id) {
            manageAPI.passRegister({stuId: id})
        },
        rejectRegister(id) {
            manageAPI.rejectRegister({stuId: id})
        }
    }
}