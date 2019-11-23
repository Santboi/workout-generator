<template>
  <v-card
    class="mb-5"
  >
    <v-card-title>{{ exercise.name }}</v-card-title>
    <v-card-text v-html="exercise.description"/>
    <v-card-text class="py-0">
      <v-form
        v-model="form.valid"
        ref="exerciseForm"
      >
        <v-row>
          <v-col :cols="6">
            <v-text-field
              v-model="form.sets"
              :rules="form.setsRules"
              label="Sets"
              placeholder="3"
              type="number"
              filled
              dense
            />
          </v-col>
          <v-col :cols="6">
            <v-text-field
              v-model="form.weight"
              :rules="form.weightRules"
              label="Weight"
              placeholder="50"
              suffix="lb"
              type="number"
              filled
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col :cols="6">
            <v-text-field
              v-model="form.reps"
              :rules="form.repsRules"
              label="Reps"
              placeholder="6"
              type="number"
              filled
              dense
            />
          </v-col>
          <v-col :cols="6">
            <v-text-field
              label="Time Elapsed (s)"
              :value="timeElapsed"
              :loading="timer.ongoing"
              suffix="s"
              placeholder="0"
              filled
              dense
              disabled
              style="pointer-events: none"
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
      </v-form>
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
        form: {
          valid: false,
          sets: 0,
          setsRules: [
            v => !!v || 'Name is required',
          ],
          reps: 0,
          repsRules: [
            v => !!v || 'Name is required',
          ],
          weight: 0,
          weightRules: [
            v => !!v || 'Name is required',
          ]
        },
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
        if (!this.$refs.exerciseForm.validate()) {
          return
        }
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