<template>
  <v-app>
    <!-- toolbar -->
    <router-view name="toolbar" />
    <v-content>
      <v-container fill-height align-start>
        <!-- aux -->
        <LoadingModal />
        <ErrorSnack />

        <!-- main views -->
        <transition name="fade" mode="out-in">
          <router-view name="default" />
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */
import { mapActions } from 'vuex'

import ErrorSnack from './components/ErrorSnack.vue'
import LoadingModal from './components/LoadingModal.vue'

export default {
  name: 'App',
  components: {
    ErrorSnack,
    LoadingModal
  },
  async mounted() {
    try {
      await this.fetchUser()
    } catch (error) {
      console.log(error)
      this.$store.dispatch('showErrorSnack', 'There was an issue retrieving your user data.')
    }
  },
  methods: {
    ...mapActions('userModule', ['fetchUser'])
  }
};
</script>

<style>

/* spinner animation */
@keyframes spin {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.spinner {
  animation: spin .6s infinite;
}
.spinner--slower {
  animation: spin 1.5s infinite;
}

/* fade animation */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity transform;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(-25px);
}
</style>