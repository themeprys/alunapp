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

    <q-footer bordered class="bg-white text-dark">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-tabs v-model="tab">
          <a href="/" style="color: #333">
            <q-tab
              to="/"
              name="home"
              icon="fa-solid fa-home"
              class="text-lowercase"
              exact
            />
          </a>
          <q-route-tab name="list" icon="fa-solid fa-search" exact />
          <q-route-tab name="play" icon="fa-solid fa-play" exact />

          <q-route-tab name="shuffle" icon="fa-regular fa-heart" exact />

          <q-route-tab name="more" icon="fa-solid fa-info-circle" exact />
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