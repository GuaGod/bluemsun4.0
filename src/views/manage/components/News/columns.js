let columns = [
    {
        title: 'Name',
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
        title: 'Age',
        key: 'age'
    },
    {
        title: 'Address',
        key: 'address'
    },
    {
        title: 'Action',
        key: 'action',
        width: 150,
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
                            this.show(params.index)
                        }
                    }
                }, 'View'),
                h('Button', {
                    props: {
                        type: 'error',
                        size: 'small'
                    },
                    on: {
                        click: () => {
                            this.remove(params.index)
                        }
                    }
                }, 'Delete')
            ]);
        }
    }
];

export default columns;