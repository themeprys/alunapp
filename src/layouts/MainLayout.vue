<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <header-app /> -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- <footer-app /> -->
    <!-- <player-app /> -->
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

// import HeaderApp from "src/components/general/HeaderApp.vue";
// import FooterApp from "src/components/general/FooterApp.vue";
// import PlayerApp from "src/components/PlayerApp.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    // FooterApp,
    // HeaderApp,
    // PlayerApp,
  },
});
</script>
