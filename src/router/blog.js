import Forum from '../views/Blog/Forum/Forum.vue'
import GetBlog from '../views/Blog/GetBlog/GetBlog.vue'
import WriteBlog from '../views/Blog/WriteBlog/WriteBlog.vue'
import UpdateBlog from '../views/Blog/UpdateBlog/UpdateBlog.vue'

import { addBaseUrl } from '../helpers/router.js'

const baseUrl = '/blog'
let routes = [
    {
        path: 'forum',      //论坛区
        name: 'forum',
        component: Forum
    },
    {
        path: 'getBlog/:id',    //获取博客详细内容
        name: 'getBlog',
        component: GetBlog
    },
    {
        path: 'writeBlog',
        name: 'writeBlog',
        component: WriteBlog
    },
    {
        path: 'updateBlog',
        name: 'updateBlog',
        component: UpdateBlog
    },
]

function createRoutes(baseUrl, routes) {
    routes = addBaseUrl(baseUrl, routes);
    
    return routes;
}

export default createRoutes(baseUrl, routes)