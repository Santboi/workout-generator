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
            v-for="workout in scheduledWorkouts"
            :key="workout.date"
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
    scheduledWorkouts() {
      return [{date: '11/22/2019', details: 'asdf asdf'}, {date: '11/19/2019', details: 'asdf asdf'}, {date: '11/17/2019', details: 'asdf asdf'}]
    }
  }
}
</script>