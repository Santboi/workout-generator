/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Create from '../views/Create.vue'
import Home from '../views/Home.vue'
import Favorites from '../views/Favorites.vue'
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
    path: '/favorites',
    name: 'favorites',
    components: {
      default: Favorites,
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
  routes
})

// global router interceptor
router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    (store.state.exerciseModule.zones.length === 0)
      ? router.push({ path: '/'})
      : next()
    return
  }
  next()
})

export default router
