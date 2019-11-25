<template>
  <v-simple-table>
    <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Date</th>
            <th class="text-left">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="workout in user.workout_log"
            :key="workout.date"
          >
            <td>{{ workout.date }}</td>
            <td>
              <span
                v-for="(zone, i) in workout.zones"
                :key="i"
              >
                {{ zone }}
              </span>
            </td>
          </tr>
        </tbody>
      </template>
  </v-simple-table>
  
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'WorkoutLogTab',
  data() {
    return {
      workoutScheduleTable: {
        headers: [
          {
            text: 'Date',
            value: 'date',
            align: 'start',
          },
          {
            text: 'Details',
            value: 'details',
            align: 'start',
          }
        ]
      }
    }
  },
  computed: {
    ...mapState('userModule', ['user'])
  }
}
</script>