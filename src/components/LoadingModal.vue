<template>
  <v-dialog
    v-model="isLoading"
    persistent
  >
    <v-card>
      Loading
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