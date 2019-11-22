<template>
  <v-col
    class="zones-container elevation-3"
    cols="12"
  >
    <span class="d-block grey--text text--darken-1 mb-2 caption">muscle groups</span>
    <v-chip
      v-for="zone in zones"
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
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'zoneList',
    props: {
      zones: {
        type: Array,
        required: true
      }
    },
    methods: {
      ...mapActions('exerciseModule', ['removeZone'])
    }
  }
</script>

<style scoped>
  .zones-container {
    height: 166px;
    max-height: 166px;
    overflow: auto;
    background-color: #DDD;
    border-radius: 8px;
    /* box-shadow: inset 0 0 4px rgba(0,0,0,.25);
    -moz-box-shadow:    inset 0 0 4px rgba(0,0,0,.25);
    -webkit-box-shadow: inset 0 0 4px rgba(0,0,0,.25); */
  }
</style>