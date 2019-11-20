import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const exercisesModule = {
  state: {
    favorited_workouts: [],
    current_workout: {
      name: 'this is a workout',
      target_zones: ['chest', 'back'],
      exercises: []
    },
  },
  mutations: {
    saveWorkout() {

    },
    deleteWorkout() {

    },
    createWorkout() {

    }
  },
  actions: {
    createWorkout(context) {
        // eslint-disable-next-line no-console
      console.log(context);
        // eslint-disable-next-line no-console
      console.log('happening')
    }
  },
  getters: {},
}

export default new Vuex.Store({
  state: {
    isLoading: false,
    zones: [],
  },
  mutations: {
    addZone(state, zone) {
      state.zones.push(zone)
    },
    removeZone(state, zone) {
      const index = state.zones.indexOf(zone)

      if (index > -1) {
        state.zones.splice(index, 1)
      }
    },
    toggleLoading(state, isLoading) {
      state.isLoading = isLoading
    }
  },
  actions: {
    addZone(context, zone) {
      context.commit('addZone', zone)
    },
    removeZone(context, zone) {
      context.commit('removeZone', zone)
    },
    toggleLoading(context, isLoading) {
      context.commit('toggleLoading', isLoading);
    }
  },
  modules: {
    exercises: exercisesModule,
  }
})
