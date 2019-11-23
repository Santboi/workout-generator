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
            v-for="(workout, i) in scheduledWorkouts"
            :key="`${workout.date}-${i}`"
          >
            <td>{{ workout.date }}</td>
            <td>{{ workout.details }}</td>
          </tr>
        </tbody>
      </template>
  </v-simple-table>
  
</template>
<script>
export default {
  name: 'WorkoutScheduleTab',
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
    scheduledWorkouts() {
      return [{date: '11/23/2019', details: 'asdf asdf'}, {date: '11/23/2019', details: 'asdf asdf'}, {date: '11/23/2019', details: 'asdf asdf'}]
    }
  }
}
</script>