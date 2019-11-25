/* eslint-disable */
import firebase from 'firebase'

const userModule = {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    setUser(state, userObj) {
      state.user = userObj
    },
  },
  actions: {
    async fetchUser(context) {
      const userRef = firebase.firestore().collection('users').doc('X123')
      try {
        const userInfo = await userRef.get()
        console.log(userInfo.data())
        context.commit('setUser', userInfo.data())
      }catch (error) {
        console.log(error)
      }
    },
  }
}

export default userModule