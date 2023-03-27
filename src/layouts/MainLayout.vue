<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <footer-app />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import FooterApp from "src/components/general/FooterApp.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    FooterApp,
  },
});
</script>
