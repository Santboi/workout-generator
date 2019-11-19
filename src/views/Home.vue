<template>
  <v-row
    class="home"
    justify="center"
  >
    <v-col cols="9">
      
      <v-row justify="center">
        <MuscleModel :showing-front="showingFront"/>
        <v-switch
          v-model="showingFront"
          :label="switchLabel"
        />
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
    switchLabel() {
      return this.showingFront ? 'Front' : 'Back'
    }
  }
}
</script>
