<template>
  <v-snackbar
    v-model="showErrorSnack"
    app
    top
    color="orange"
  >
    {{ errorSnackText }}
    <v-spacer />
    <v-btn
      color="white"
      text
      @click="hideErrorSnack"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'ErrorSnack',
  computed: {
    showErrorSnack() {
      return this.$store.state.errorSnack.show
    },
    errorSnackText() {
      return this.$store.state.errorSnack.text
    }
  },
  methods: {
    hideErrorSnack() {
      this.$store.dispatch('hideErrorSnack')
    }
  }
}
</script>