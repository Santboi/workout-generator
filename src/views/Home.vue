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
          class="ma-0"
          hide-details
        />
      </v-row>
      <v-row class="mt-5">
        <v-col cols="12">
          <v-chip
            v-for="zone in activeZones"
            :key="zone"
            close
            @click:close="removeZone(zone)"
            small
            class="mr-2 mb-2"
          >
            <v-icon small left>
              mdi-weight-lifter
            </v-icon>
            <span class="text-capitalize">{{ zone }}</span>
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
