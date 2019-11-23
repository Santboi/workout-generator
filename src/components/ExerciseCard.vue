<template>
  <v-card
    class="mb-5"
  >
    <v-card-title>{{ exercise.name }}</v-card-title>
    <v-card-text v-html="exercise.description"/>
    <v-card-text class="pt-0">
      <v-row>
        <v-col :cols="6">
          <v-text-field
            hide-details
            label="Sets"
            placeholder="3"
            type="number"
            filled
          />
        </v-col>
        <v-col :cols="6">
          <v-text-field
            hide-details
            label="Weight (lb)"
            placeholder="50"
            type="number"
            filled
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="6">
          <v-text-field
            hide-details
            label="Reps"
            placeholder="Placeholder"
            type="number"
            filled
          />
        </v-col>
        <v-col :cols="6">
          <v-text-field
            :value="timeElapsed"
            hide-details
            label="Time Elapsed (s)"
            placeholder="0"
            filled
            readonly
          />
        </v-col>
        <v-col :cols="12">
          <v-btn
            large
            :color="submitColor"
            width="100%"
            @click="timer.ongoing ? stopTimer() : startTimer()"
            :disabled="completed"
          >
            {{ submitText }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
/* eslint-disable */
import Stopwatch from 'statman-stopwatch'

export default {
    name: 'ExerciseCard',
    data() {
      return {
        completed: false,
        timer: {
          elapsed: 0,
          ongoing: false,
        }
      }
    },
    props: {
      exercise: {
        type: Object,
        required: true
      }
    },
    computed: {
      submitColor() {
        if (this.completed) {
          return 'success'
        } else  if (!this.timer.ongoing) {
          return 'primary'
        } else if  (this.timer.ongoing) {
          return 'error'
        }
      },
      submitText() {
        if (this.completed) {
          return 'Finished'
        } else  if (!this.timer.ongoing) {
          return 'Start Sets'
        } else if  (this.timer.ongoing) {
          return 'End'
        }
      },
      timeElapsed() {
        return Math.round((this.timer.elapsed / 1000), 2)
      }
    },
    mounted() {
      this.stopwatch = new Stopwatch(this.exercise.name, false)
    },
    methods: {
      startTimer() {
        this.timer.ongoing = true
        this.stopwatch.start()
      },
      stopTimer() {
        this.timer.ongoing = false
        this.stopwatch.stop()
        this.timer.elapsed = this.stopwatch.read()
        this.completed = true
        this.$emit('complete-exercise')
      },
    },
    
}
</script>