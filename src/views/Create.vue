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
              v-model="selectedWorkoutOptions"
              :value="{name, description}"
            />
          </v-list-item-action>
        </v-list-item>
      </v-list>

    </v-col>
  </v-row>
</template>
<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Create',
    computed: {
      selectedWorkoutOptions: {
        get() {
          return this.$store.state.exerciseModule.selected_workout_options
        },
        set(optionsArr) {
          this.updateSelectedWorkoutOptions(optionsArr)
        }
      },
      ...mapState('exerciseModule', ['create_workout_options'])
    },
    methods: {
      ...mapActions('exerciseModule', ['updateSelectedWorkoutOptions'])
    }
  }
</script>

<style>
.create__description p {
  font-size: 14px;
  color: rgba(0,0,0,.5);
  line-height: 1.25rem;
}
</style>
