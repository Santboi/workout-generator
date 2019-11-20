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

import ErrorSnack from './components/ErrorSnack.vue'
import LoadingModal from './components/LoadingModal.vue'

export default {
  name: 'App',
  components: {
    ErrorSnack,
    LoadingModal
  }
};
</script>

<style>
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