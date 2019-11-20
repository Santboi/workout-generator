<template>
  <v-dialog
    v-model="isLoading"
    persistent
    overlay-color="primary"
    overlay-opacity=".5"
  >
    <v-card color="primary" class="pa-5">
      <v-row class="align-center px-5">
        <v-icon
          class="spinner display-2 pa-2"
          color="white"
        >
          mdi-dumbbell
        </v-icon>
        <p
          class="title white--text mb-0 ml-3"
        >Generating....</p>
      </v-row>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'LoadingModal',
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style>

@keyframes spin {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.spinner {
  animation: spin .6s infinite;
}
</style>