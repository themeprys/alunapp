<template>
  <div>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="300"
      :breakpoint="400"
    >
      <drawer-app />
    </q-drawer>

    <q-footer reveal elevated class="bg-white text-dark">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-tabs v-model="tab">
          <q-route-tab
            to="/"
            label="Playing"
            name="alarms"
            icon="fa-solid fa-podcast"
            class="text-lowercase"
            exact
          />
          <q-route-tab
            to="/explore"
            label="Explore"
            name="mails"
            icon="fa-solid fa-greater-than-equal"
            class="text-lowercase"
            exact
          />

          <q-route-tab
            to="/updates"
            label="updates"
            name="alarms"
            icon="fa-regular fa-eye"
            class="text-lowercase"
          />
          <q-tab
            label="more"
            name="movies"
            icon="fa-solid fa-bars-staggered"
            @click="toggleLeftDrawer"
            class="text-lowercase"
          />
        </q-tabs>
      </div>
    </q-footer>
  </div>
</template>

<script>
import { ref } from "vue";
import DrawerApp from "components/general/DrawerApp.vue";
// import EssentialLink from 'components/EssentialLink.vue'

// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ]

export default {
  components: {
    DrawerApp,
    // EssentialLink
  },
  setup() {
    return {
      tab: ref("mails"),
    };
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style>
</style>