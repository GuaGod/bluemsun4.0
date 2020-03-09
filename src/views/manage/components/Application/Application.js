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
        getApplicationDetail(id) {

        }
    }
}