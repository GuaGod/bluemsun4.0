import Forum from '../views/Blog/Forum/Forum.vue'
import { addBaseUrl } from '../helpers/router.js'

const baseUrl = '/blog'
let routes = [
    {
        path: 'forum',
        name: 'forum',
        component: Forum
    },
]

function createRoutes(baseUrl, routes) {
    routes = addBaseUrl(baseUrl, routes);
    
    return routes;
}

export default createRoutes(baseUrl, routes)