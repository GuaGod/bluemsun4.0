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
                name: 'news',
                componenet: News
            },
            {
                path: 'register',
                name: 'register',
                component: Register
            },
            {
                path: 'notice',
                name: 'notice',
                component: Notice
            },
            {
                path: 'application',
                name: 'application',
                component: Application
            },
            {
                path: 'production',
                name: 'production',
                component: Production
            }
        ]
    }
]

export default routes