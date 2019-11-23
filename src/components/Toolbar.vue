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
        <span class="font-weight-bold">{{ company_name }}</span>
      </div>

      <v-spacer />
      
      <transition name="fade" mode="out-in">
        <SpeedDial v-if="showSpeedDial" />
        <v-btn
          v-if="onCreateView"
          color="white"
          class="primary--text"
          @click="submitWorkout"
        >
          Create
        </v-btn>
      </transition>
    </v-app-bar>
</template>

<script>
  /* eslint-disable */
  import SpeedDial from '@/components/SpeedDial.vue'
  import { mapState, mapActions } from 'vuex'

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
      ...mapState('configModule', ['company_name']),
      ...mapState('exerciseModule', ['selected_workout_options'])
    },
    methods: {
      navigateHome() {
        if (this.$route.name !== 'home') this.$router.push('/')
      },
      submitWorkout() {
        let workout = {
          exercises: this.selected_workout_options,
          exercises_total: this.selected_workout_options.length,
          exercises_completed: 0,
        }

        this.setCurrentWorkout(workout)
        this.$router.push('/workout')
      },
      ...mapActions('exerciseModule', ['setCurrentWorkout'])
    } 
  }
</script>