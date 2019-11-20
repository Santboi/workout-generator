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
      to='/workouts'
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
  // import { db } from '../main'

  export default {
    name: 'SpeedDial',
    data: () => ({
      direction: 'bottom',
      expanded: false,
      transition: 'slide-y-reverse-transition',
    }),
    computed: {
      currentWorkout() {
        return this.$store.state.exercises.currentWorkout
      }
    },
    methods: {
      generateWorkout() {
        // this.$store.dispatch('toggleLoading', true)
    
        // this.exercisesToLoad.forEach(({ name }) => {
        //   db.collection(`${name}_exercises`).doc('test').set({
        //     name: name,
        //     description: 'This is a description of an exercise' 
        //   })
        // })

        // eslint-disable-next-line no-console
        console.log(this.$store.state.exercises.current_workout);
        
        
        // chest, biceps, core, quadrieceps, shoulders, forearms, calves, adductors, neck, trapezius, triceps, glutes, lower_back, hamstring

      }
    }
  }
</script>

<style scoped>
  .speed-dial__button {
    transform: translateY(30px)
  }
</style>