<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div
        class="d-flex align-center"
        @click="navigateHome"
      >
        <v-icon class="mr-2">mdi-weight-lifter</v-icon>
        <span class="font-weight-bold">Myo</span>
      </div>

      <v-spacer />
      
      <transition name="fade" mode="out-in">
        <SpeedDial v-if="showSpeedDial" />
        <v-btn
          v-if="onCreateView"
          color="white"
          class="primary--text"
          :to="'/workout'"
        >
          Create
        </v-btn>
      </transition>
    </v-app-bar>
</template>

<script>
  import SpeedDial from '@/components/SpeedDial.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'toolbar',
    components: {
      SpeedDial
    },
    computed: {
      onCreateView() {
        return this.$route.name === 'create'
      },
      showSpeedDial() {
        return this.$route.name === 'home'
      },
    },
    methods: {
      navigateHome() {
        if (this.$route.name !== 'home') this.$router.push('/')
      },
      ...mapActions('exerciseModule', ['submitWorkout'])
    } 
  }
</script>