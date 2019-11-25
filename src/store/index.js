/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

import configModule from './modules/configModule'
import exerciseModule from './modules/exerciseModule'
import userModule from './modules/userModule'

Vue.use(Vuex)

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
    configModule,
    exerciseModule,
    userModule
  }
})
