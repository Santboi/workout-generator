import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    }
  },
  actions: {
    addZone(context, zone) {
      context.commit('addZone', zone)
    },
    removeZone(context, zone) {
      context.commit('removeZone', zone)
    }
  },
})
