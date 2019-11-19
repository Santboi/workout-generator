<template>
  <v-app>
    <!-- toolbar -->
    <router-view name="toolbar" />

    <v-content>
      <v-container fluid fill-height>
        <router-view name="default" />
      </v-container>
    </v-content>

    <!-- floating actions button -->
    <!-- <router-view name="speedDial" />     -->
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
