<template>
    <MuscleModelFront
      v-if="showingFront"
      :active-zones="activeZones"
      :handle-zone-click="handleZoneClick"
    />
    <MuscleModelBack
      v-else
      :active-zones="activeZones"
      :handle-zone-click="handleZoneClick"
    />
</template>
<script>
  import MuscleModelFront from './MuscleModelFront.vue'
  import MuscleModelBack from './MuscleModelBack.vue'
  export default {
   name: 'MuscleModel',
   components: {
     MuscleModelFront,
     MuscleModelBack
   },
   props: {
     activeZones: {
       type: Array,
       required: true,
     },
     showingFront: {
       type: Boolean,
       required: true,
     }
   },
   methods: {
     handleZoneClick(zone) {
      return this.$store.state.zones.includes(zone)
        ? this.$store.dispatch('removeZone', zone)
        : this.$store.dispatch('addZone', zone)
     }
   }
  }
</script> 