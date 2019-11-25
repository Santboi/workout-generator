<template>
  <v-row>
    <v-dialog
      v-model="completedWorkoutModal.show"
      persistent
      overlay-color="primary"
      overlay-opacity=".5"
    >
      <v-card
        color="primary"
        class="pa-5"
      >
        <v-card-title class="justify-center">
          <span class="white--text display-1 font-weight-bold">You did it!</span>
        </v-card-title>
        <v-card-text class="justify-center align-center my-5">
          <v-row justify="space-around" class="px-5">
            <v-icon class="spinner--slower yellow--text display-3">mdi-star</v-icon>
            <v-icon class="spinner--slower yellow--text display-3">mdi-star</v-icon>
            <v-icon class="spinner--slower yellow--text display-3">mdi-star</v-icon>
          </v-row>
        </v-card-text>
        <v-card-text>
          <v-row justify="space-between">
            <v-col :cols="12">
                <v-btn
                  block
                  outlined
                  color="white"
                  class="mb-5"
                  :to="{name: 'my-progress'}"
                >
                  View Progress
                </v-btn>
                <v-btn
                  @click="endWorkout"
                  class="primary--text"
                  block
                  :loading="endWorkoutLoading"
                >
                  End Workout
                </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-col :cols="12">
      <v-progress-linear :value="workoutProgress"/>
      <h1 class="text-center headline font-weight-bold mb-2 mt-5">Today's Exercise</h1>
      <h2 class="text-center subtitle-1 mb-5">{{ todaysDate }}</h2>
      
      <!-- exercises -->
      <ExerciseCard
        v-for="(exercise, i) in selected_workout_options"
        :key="`${exercise}-${i}`"
        :exercise="exercise"
        @complete-exercise="completeExercise"
      />
    </v-col>
  </v-row>
</template>
<script>
/* eslint-disable */
import ExerciseCard from '../components/ExerciseCard.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Workout',
  components: {
    ExerciseCard
  },
  data() {
    return {
      completedWorkoutModal: {
        show: false,
      },
      endWorkoutLoading: false,
    }
  },
  computed: {
    todaysDate() {
      let today = new Date()
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0')
      const yyyy = today.getFullYear()

      today = mm + '/' + dd + '/' + yyyy

      return today
    },
    ...mapState('exerciseModule', ['selected_workout_options', 'currentWorkout']),
    ...mapGetters('exerciseModule', ['workoutProgress'])
  },
  methods: {
    async endWorkout() {
      this.endWorkoutLoading = true
      // make save workout requests here
      try {
        await this.saveWorkout(this.todaysDate)
        this.endWorkoutLoading = false
        this.$router.push({name: 'my-progress'})
      } catch (error) {
        this.$store.commit('showErrorSnack', 'An error occurred while trying to save your workout.')
      }
      this.endWorkoutLoading = false
    },
    completeExercise() {
      this.updateCurrentWorkoutProgression('add')
    },
    uncompleteExercise() {
      this.updateCurrentWorkoutProgression('remove')
    },
    ...mapActions('exerciseModule', ['updateCurrentWorkoutProgression', 'saveWorkout'])
  },
  watch: {
    workoutProgress() {
      if (this.workoutProgress === 100) {
        this.completedWorkoutModal.show = true
      }
    }
  }
}
</script>