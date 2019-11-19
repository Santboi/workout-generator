<template>
  <div class="home">
    <MuscleModel
      :showing-front="false"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import MuscleModel from '@/components/muscle_model'

export default {
  name: 'home',
  components: {
    MuscleModel
  }
}
</script>
