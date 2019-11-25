<template>
  <v-row
    class="progress"
    justify="center"
    align="start"
  >
    <v-col :cols="12">
      <v-card>
        <v-tabs fixed-tabs>
          <v-tab
            key="log-tab" 
            class="text-capitalize"
            href="#log-tab"
          >
            Workout Log
          </v-tab>
          <v-tab
            key="scheduled-tab"
            class="text-capitalize"
            href="#scheduled-tab"
          >
            Scheduled Workouts
          </v-tab>
          <!-- log & scheduled -->
          <v-tab-item value="log-tab">
            <WorkoutLogTab />
          </v-tab-item>
          <v-tab-item value="scheduled-tab">
            <WorkoutScheduleTab />
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import WorkoutLogTab from '@/components/WorkoutLogTab.vue'
import WorkoutScheduleTab from '@/components/WorkoutScheduleTab.vue'

export default {
  name: 'MyProgress',
  components: {
    WorkoutLogTab,
    WorkoutScheduleTab,
  }, 
}
</script>
