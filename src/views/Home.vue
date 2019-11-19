<template>
  <v-row
    class="home"
    justify="center"
    align="start"
  >
    <v-col cols="10">
      <v-row justify="center">
        <MuscleModel
          :active-zones="activeZones"
          :showing-front="showingFront"
        />
        <v-switch
          v-model="showingFront"
          :label="switchLabel"
          color="blue"
          class="ma-0"
          hide-details
        />
      </v-row>
      <v-row class="mt-5">
        <v-col
          class="zones-container"
          cols="12"
        >
          <span class="d-block grey--text text--darken-1 mb-2 caption">active workouts</span>
          <v-chip
            v-for="zone in activeZones"
            :key="zone"
            close
            color="blue"
            text-color="white"
            @click:close="removeZone(zone)"
            class="mr-2 mb-2"
          >
            {{ zone }}
          </v-chip>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import MuscleModel from '@/components/muscle_model'

export default {
  name: 'home',
  components: {
    MuscleModel
  },
  data() {
    return {
      showingFront: true,
    }
  },
  computed: {
    activeZones() {
       return this.$store.state.zones
     },
    switchLabel() {
      return this.showingFront ? 'Front' : 'Back'
    }
  },
  methods: {
    removeZone(zone) {
      this.$store.dispatch('removeZone', zone);
    }
  }
}
</script>

<style scoped>
  .zones-container {
    height: 125px;
    max-height: 125px;
    overflow: auto;
    background-color: #DDD;
    border-radius: 8px;
  }
</style>