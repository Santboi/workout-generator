<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div
        class="d-flex align-center"
        @click="navigateHome"
      >
        <v-icon class="mr-2">mdi-weight-lifter</v-icon>
        <span class="font-weight-bold">Myo</span>
      </div>

      <v-spacer />

      <SpeedDial />
    </v-app-bar>
</template>

<script>
  import SpeedDial from '@/components/SpeedDial.vue'

  export default {
    name: 'toolbar',
    components: {
      SpeedDial
    },
    methods: {
      navigateHome() {
        if (this.$route.name !== 'home') this.$router.push('/')
      }
    }  
  }
</script>