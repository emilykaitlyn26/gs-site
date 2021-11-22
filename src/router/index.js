import Vue from 'vue'
import Home from '../Home'
import People from '../People'
import Blog from '../Blog'
import BlogRead from '../BlogRead'
import Projects from '../Projects'
import Page from '../Page'
import VueRouter from 'vue-router'
import ProjectPage from '../ProjectPage'
Vue.use(
    VueRouter
)
const routes = [
    { path: '/projects', component: Projects },
    { path: '/people', component: People },
    { path: '/blog', component: Blog },
    { path: '/blog/:slug', component: BlogRead },
    { path: '/projects/:slug', component: ProjectPage },
    { path: '/page/:slug', component: Page},
    { path: '/', component: Home },
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
          } else {
            return { x: 0, y: 0 }
          }
      }
})


export default router;