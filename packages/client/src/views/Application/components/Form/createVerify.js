/**
 * 创建校验器所需要的规则
 */

let verifyRules = [
    {
        name: 'name',
        rules: [
            {
                verify: /./,
                errorMsg: '姓名不能为空'
            },
            {
                verify: /.{2, 12}/,
                errorMsg: '姓名长度错误'
            }
        ]
    },
    {
        name: 'major',
        rules: [
            {
                verify: /./,
                errorMsg: '院系不能为空'
            },
            {
                verfiy: /.{1, 20}/,
                errorMsg: '院系长度错误'
            }
        ]
    },
    {
        name: 'grade',
        rules: [
            {
                verify: /[0-9]{4}/,
                errorMsg: '年级为4位数，如2019'
            },
        ]
    },
    {
        name: 'age',
        rules: [
            {
                verify: /[0-9]{1, 3}/,
                errorMsg: '年龄为1-3位的数字'
            }
        ]
    },
    {
        name: 'stuId',
        rules: [
            {
                verify: /[0-9]{10}/,
                errorMsg: '学号为10位数字'
            }
        ]
    },
    {
        name: 'phone',
        rules: [
            {
                verify: /./,
                errorMsg: '手机号不可为空'
            }
        ]
    },
    {
        name: 'qq',
        rules: [
            {
                verify: /./,
                errorMsg: 'qq不可为空'
            },
            {
                verify: /^[0-9]$/,
                errorMsg: 'qq输入错误'
            }
        ]
    },
    {
        name: 'email',
        rules: [
            {
                verify: /./,
                errorMsg: '邮箱不可为空'
            }
        ]
    },
    {
        name: 'dormitory',
        rules: [
            {
                verify: /./,
                errorMsg: '寝室不能为空'
            }
        ]
    },
    {
        name: 'introduction',
        rules: [
            {
                verify: /./,
                errorMsg: '自我介绍不能为空'
            }
        ]
    }
]

export default verifyRules