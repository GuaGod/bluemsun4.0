import Manage from '../views/manage/Manage.vue'
import News from '../views/manage/components/News/News.vue'
import Register from '../views/manage/components/Register/Register.vue'
import Application from '../views/manage/components/Application/Application.vue'
import Notice from '../views/manage/components/Notice/Notice.vue'
import Production from '../views/manage/components/Production/Production.vue'

let routes = [
    {
        path: '/manage',
        name: 'manage',
        component: Manage,
        children: [
            {
                path: 'news',
                name: 'newsManage',
                component: News
            },
            {
                path: 'register',
                name: 'registerManage',
                component: Register
            },
            {
                path: 'notice',
                name: 'noticeManage',
                component: Notice
            },
            {
                path: 'application',
                name: 'applicationManage',
                component: Application
            },
            {
                path: 'production',
                name: 'productionManage',
                component: Production
            }
        ]
    }
]

export default routes