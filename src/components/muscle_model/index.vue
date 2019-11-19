<template>
  <div>
    <MuscleModelFront v-if="showingFront"/>
    <MuscleModelBack v-else />
  </div>
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
     showingFront: {
       type: Boolean,
       required: true,
     }
   },
   data: () => ({
      //
    })
  }
</script>