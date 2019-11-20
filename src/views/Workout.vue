<template>
  <div>
    <h1
      v-for="zone in zones"
      :key="zone"
    >please work</h1>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Workout',
  computed: {
    ...mapState('exerciseModule', ['zones'])
  }
}
</script>