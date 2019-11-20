<template>
  <v-row
    class="home"
    justify="center"
    align="start"
  >
    <v-col cols="8">
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
    </v-col>
    <v-col cols="10">
      <v-row>
        <ZoneList :zones="activeZones"/>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import MuscleModel from '@/components/muscle_model'
import ZoneList from '@/components/ZoneList.vue'

export default {
  name: 'home',
  components: {
    MuscleModel,
    ZoneList
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
}
</script>