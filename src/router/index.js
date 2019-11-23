/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Create from '../views/Create.vue'
import Home from '../views/Home.vue'
import Progress from '../views/Progress.vue'
import Workout from '../views/Workout.vue'

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
    path: '/progress',
    name: 'progress',
    components: {
      default: Progress,
      toolbar: Toolbar,
    }
  },
  {
    path: '/create',
    name: 'create',
    components: {
      default: Create,
      toolbar: Toolbar,
    }
  },
  {
    path: '/workout',
    name: 'workout',
    components: {
      default: Workout,
      toolbar: Toolbar
    }
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.name === 'workout') {
      return { x: 0, y: 0 } 
    }
  }
})

// global router interceptor
// router.beforeEach((to, from, next) => {
//   next()
// })

export default router
