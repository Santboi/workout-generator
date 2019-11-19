import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Toolbar from '../components/Toolbar.vue'
import SpeedDial from '../components/SpeedDial.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      toolbar: Toolbar,
      speedDial: SpeedDial,
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
