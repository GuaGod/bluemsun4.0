import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home.vue'
import Application from '../views/Application/Application.vue'
import blogRoutes from './blog.js'
import manageRoutes from './manage.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/application',
      name: 'application',
      component: Application
    },
    ...blogRoutes,
    ...manageRoutes,
  ]
})
