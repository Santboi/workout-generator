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

      <v-spacer></v-spacer>

      <v-btn text small class="text-capitalize" :to="'/workouts'">Workouts</v-btn>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'toolbar',
    methods: {
      navigateHome() {
        if (this.$route.name !== 'home') this.$router.push('/')
      }
    }  
  }
</script>