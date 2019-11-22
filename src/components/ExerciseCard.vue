<template>
  <v-card
    class="mb-5"
  >
    <v-card-title>{{ exercise.name }}</v-card-title>
    <v-card-text v-html="exercise.description"/>
    <v-card-text>
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
            hide-details
            label="Time Elapsed"
            placeholder="0"
            type="number"
            filled
            
          />
        </v-col>
        <v-col :cols="12">
          <v-btn
            large
            color="primary"
            width="100%"
            @click="startTimer"
          >
            Start Sets
          </v-btn>
          <!-- <v-btn
            large
            color="primary"
            width="100%"
          >
            Complete
          </v-btn> -->
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    name: 'ExerciseCard',
    props: {
      exercise: {
        type: Object,
        required: true
      }
    },
    data() {
      return {}
    },
    methods: {
      startTimer() {
        alert('started timer')
      }
    }
}
</script>