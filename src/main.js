import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false

// firebase init
firebase.initializeApp({
  apiKey: "AIzaSyAWJ0i9VclO7hSYvAVID25HE6mdG2fylGo",
  authDomain: "workout-generator-faf02.firebaseapp.com",
  databaseURL: "https://workout-generator-faf02.firebaseio.com",
  projectId: "workout-generator-faf02",
  storageBucket: "workout-generator-faf02.appspot.com",
  messagingSenderId: "451265965786",
  appId: "1:451265965786:web:21442854960aaac9d47fe3",
  measurementId: "G-RTCSVNY51J"  
})

export const fb = firebase
export const db = firebase.firestore()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

