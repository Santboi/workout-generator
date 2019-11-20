<template>
  <v-speed-dial
    v-model="expanded"
    :direction="direction"
    :transition="transition"
    class="speed-dial__button"
  >
    <template #activator>
      <v-btn
        v-model="expanded"
        color="blue"
        dark
        fab
        large
      >
        <v-icon v-if="expanded">mdi-close</v-icon>
        <v-icon v-else>mdi-menu</v-icon>
      </v-btn>
    </template>

    <!-- favorited workouts -->
    <v-btn
      fab
      light
      to='/favorites'
    >
      <v-icon>mdi-star</v-icon>
    </v-btn>

     <!-- generate workout -->
    <v-btn
      fab
      dark
      color="#424242"
      @click="generateWorkout"
    >
      <v-icon>mdi-dumbbell</v-icon>
    </v-btn>
  </v-speed-dial>
</template>
<script>
  import { mapState, mapActions } from 'vuex'


  export default {
    name: 'SpeedDial',
    data: () => ({
      direction: 'bottom',
      expanded: false,
      transition: 'slide-y-reverse-transition',
    }),
    computed: {
      generateDisabled() {
        return this.zones.length === 0
      },
      currentWorkout() {
        return this.$store.state.exercises.currentWorkout
      },
      ...mapState('exerciseModule', ['zones'])
    },
    methods: {
      async generateWorkout() {
        if (this.generateDisabled) {
          this.$store.dispatch('showErrorSnack', 'You select muscle groups from the muscle diagram to generate a workout.')
          return 
        }
        this.$store.dispatch('toggleLoading', true)
        try {
          await this.createWorkout()
          this.$router.push('/create')
        } catch (err) {
          this.$store.dispatch('showErrorSnack', 'There was an issue retrieving your exercises.')
        }
        this.$store.dispatch('toggleLoading', false)
      },
      ...mapActions('exerciseModule', ['createWorkout'])
    }
  }
</script>

<style scoped>
  .speed-dial__button {
    transform: translateY(30px)
  }
</style>