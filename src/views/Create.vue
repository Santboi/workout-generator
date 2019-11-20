<template>
  <v-row
    class="create"
    align="start"
    style="width: 100%;"
  >
    <v-col cols="12">
      <b class="subtitle-2 pl-2">Select Exercise(s)</b>
      <v-list
        v-for="(exercises, zone) in create_workout_options"
        :key="zone"
        two-line
        subheader
        class="elevation-1 mb-5 mt-3"
      >
        <v-subheader class="text-capitalize">{{ zone }}</v-subheader>
        <v-list-item
          v-for="({name, description}, i) in exercises"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title class="mb-2">{{ name }}</v-list-item-title>
            <div
              v-html="description"
              class="create__description"
            />
          </v-list-item-content>
          <v-list-item-action>
            <v-checkbox
              v-model="selectedExercises"
              :value="{name, description}"
            />
          </v-list-item-action>
        </v-list-item>
      </v-list>

    </v-col>
  </v-row>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Create',
    data(){
      return {
        selectedExercises: [],
      }
    },
    computed: {
      exerciseOptionsArr() {
        return Object.keys(this.exerciseOptions).map(i => this.exerciseOptions[i])
      },
      ...mapState('exerciseModule', ['create_workout_options'])
    },
  }
</script>

<style>
.create__description p {
  font-size: 14px;
  color: rgba(0,0,0,.5);
  line-height: 1.25rem;
}
</style>