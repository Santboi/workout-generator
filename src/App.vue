<template>
  <v-app>
    <!-- toolbar -->
    <router-view name="toolbar" />

    <v-content>
      <v-container fluid fill-height>
        <LoadingModal />
        <router-view name="default" />
      </v-container>
    </v-content>

    <!-- floating actions button -->
    <!-- <router-view name="speedDial" />     -->
  </v-app>
</template>

<script>

import LoadingModal from './components/LoadingModal.vue'

export default {
  name: 'App',
  components: {
    LoadingModal
  }
};
</script>
