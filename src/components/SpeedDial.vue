<template>
  <v-speed-dial
    v-model="expanded"
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :transition="transition"
    class="speed-dial__button"
  >
    <template #activator>
      <v-btn
        v-model="expanded"
        color="blue"
        dark
        fab
        large
      >
        <v-icon v-if="expanded">mdi-close</v-icon>
        <v-icon v-else>mdi-menu</v-icon>
      </v-btn>
    </template>
    <v-btn
      fab
      light
      to='/workouts'
    >
      <v-icon>mdi-star</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      color="#424242"
      @click="generateWorkout"
    >
      <v-icon>mdi-dumbbell</v-icon>
    </v-btn>
  </v-speed-dial>
</template>
<script>
  export default {
    name: 'SpeedDial',
    data: () => ({
      direction: 'bottom',
      expanded: false,
      fling: false,
      tabs: null,
      top: false,
      right: false,
      bottom: false,
      left: false,
      transition: 'slide-y-reverse-transition',
    }),
    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { class: 'purple', icon: 'account_circle' }
          case 'two': return { class: 'red', icon: 'edit' }
          case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      },
    },
    methods: {
      generateWorkout() {
        alert('generating');
      }
    }
  }
</script>

<style scoped>
  .speed-dial__button {
    transform: translateY(30px)
  }
</style>