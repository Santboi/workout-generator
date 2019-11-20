/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const exerciseModule = {
  namespaced: true,
  state: {
    api_zone_mapping: {
      adductors: [8],
      biceps: [1],
      calves: [7],
      chest: [4],
      core: [6, 14],
      forearms: [13],
      glutes: [8],
      hamstring: [11],
      lats: [3, 12],
      lower_back: [8, 12],
      trapezius: [9],
      shoulders: [2],
      quadriceps: [10],
    },
    create_workout_options: {},
    current_workout: {
      name: 'this is a workout',
      exercises: []
    },
    favorited_workouts: [],
    selectedExercises: [],
    zones: [],
  },
  mutations: {
    setCreateWorkoutOptions(state, options) {
      state.create_workout_options = options
    },
    saveWorkout() {

    },
    deleteWorkout() {

    },
    addZone(state, zone) {
      state.zones.push(zone)
    },
    removeZone(state, zone) {
      const index = state.zones.indexOf(zone)

      if (index > -1) {
        state.zones.splice(index, 1)
      }
    },
  },
  actions: {
    addZone(context, zone) {
      context.commit('addZone', zone)
    },
    removeZone(context, zone) {
      context.commit('removeZone', zone)
    },
    async createWorkout({commit, state}) {
      const zones = state.zones
      const zoneMapping = state.api_zone_mapping
      let newExercises = {}
      
      const config = {
        language: 2,
        headers: {
          'Authorization': 'Token 63ccd7446696a5e43876d2ee71cd3c9f0695c2df'
        }
      }

      const zonePromises = zones.reduce((promiseObj, zone) => {
        let zoneIds = zoneMapping[zone]

        const exercisePromises = zoneIds.reduce((promiseChain, zoneId) => {
          const promise = axios.get(`https://wger.de/api/v2/exercise/?language=2&muscles=${zoneId}`, config)
          return [...promiseChain, promise]
        },[])
        return { ...promiseObj, [zone]: exercisePromises }
      }, {})

      for (let zone in zonePromises) {
        const res = await Promise.all(zonePromises[zone])
        const results = res.reduce((acc, response) => {
          return [...acc, ...response.data.results]
        }, [])

        const filteredResults = results.filter(({license_author}) => license_author === 'wger.de' )
        newExercises[zone] = filteredResults
      }
      
      //set zone-exercise options using mutator
      commit('setCreateWorkoutOptions', newExercises)
    },
    submitWorkout({commit, state}) {
      console.log('test');
    }
  },
  getters: {},
}

export default new Vuex.Store({
  state: {
    isLoading: false,
    errorSnack: {
      show: false,
      text: ''
    }
  },
  mutations: {
    toggleLoading(state, isLoading) {
      state.isLoading = isLoading
    },
    showErrorSnack(state, text) {
      state.errorSnack.show = true
      state.errorSnack.text = text
      setTimeout(()=> {
        state.errorSnack.show = false
        state.errorSnack.mg = ''
      }, 7000)
    },
    hideErrorSnack(state) {
      state.errorSnack.show = false
    }
  },
  actions: {
    toggleLoading(context, isLoading) {
      context.commit('toggleLoading', isLoading)
    },
    showErrorSnack(context, text) {
      context.commit('showErrorSnack', text)
    },
    hideErrorSnack(context) {
      context.commit('hideErrorSnack')
    }
  },
  modules: {
    exerciseModule
  }
})
