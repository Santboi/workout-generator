<template>
  <v-row>
    <v-col :cols="12">
      <h1 class="text-center headline font-weight-bold mb-2 mt-5">Today's Exercise</h1>
      <h2 class="text-center subtitle-1 mb-5">{{ todaysDate }}</h2>
      
      <!-- exercises -->
      <ExerciseCard
        v-for="(exercise, i) in selected_workout_options"
        :key="`${exercise}-${i}`"
        :exercise="exercise"
      />
    </v-col>
  </v-row>
</template>
<script>
/* eslint-disable */
import ExerciseCard from '../components/ExerciseCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Workout',
  components: {
    ExerciseCard
  },
  computed: {
    todaysDate() {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();

      today = mm + '/' + dd + '/' + yyyy;

      return today
    },
    ...mapState('exerciseModule', ['selected_workout_options'])
  },
}
</script>