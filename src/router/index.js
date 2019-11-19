import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Workouts from '../views/Workouts.vue'
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
    path: '/workouts',
    name: 'workouts',
    components: {
      default: Workouts,
      toolbar: Toolbar,
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
