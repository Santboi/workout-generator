/* eslint-disable */
import axios from 'axios'

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
      neck: [],
      trapezius: [9],
      shoulders: [2],
      quadriceps: [10],
    },
    currentWorkout: {
      exercises: [],
      exercises_total: 0,
      exercises_completed: 0
    },
    create_workout_options: {},
    favorited_workouts: [],
    selected_workout_options: [],
    zones: [],
  },
  mutations: {
    setCreateWorkoutOptions(state, options) {
      state.create_workout_options = options
    },
    setCurrentWorkout(state, workout) {
      state.currentWorkout = Object.assign({}, workout)
    },
    addZone(state, zone) {
      state.zones.push(zone)
    },
    updateCurrentWorkoutProgression(state, addOrRemove) {
      (addOrRemove === 'add') ? state.currentWorkout.exercises_completed++ : state.currentWorkout.exercises_completed--
    },
    removeZone(state, zone) {
      const index = state.zones.indexOf(zone)

      if (index > -1) {
        state.zones.splice(index, 1)
      }
    },
    updateSelectedWorkoutOptions(state, optionsArr) {
      state.selected_workout_options = optionsArr
    }
  },
  actions: {
    addZone(context, zone) {
      context.commit('addZone', zone)
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
    removeZone(context, zone) {
      context.commit('removeZone', zone)
    },
    saveWorkout({commit, state}) {
      console.log('saving workout!')
    },
    setCurrentWorkout(context, workout) {
      context.commit('setCurrentWorkout', workout)
    },
    updateSelectedWorkoutOptions(context, optionsArr) {
      context.commit('updateSelectedWorkoutOptions', optionsArr)
    },
    updateCurrentWorkoutProgression(context, addOrRemove) {
      context.commit('updateCurrentWorkoutProgression', addOrRemove)
    }
  },
  getters: {
    workoutProgress: state => {
      return (state.currentWorkout.exercises_completed / state.currentWorkout.exercises_total) * 100
    },
  },
}

export default exerciseModule