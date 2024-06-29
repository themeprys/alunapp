<template>
  <q-page class="q-pa-md aln_storyhighlight">
    <div class="row">
      <div class="col-12">
        <q-header reveal class="bg-white text-dark">
          <q-toolbar>
            <q-toolbar-title class="text-bold">A L U N</q-toolbar-title>

            <q-btn flat round dense icon="fa-solid fa-search" class="q-mr-sm" />
            <q-btn
              flat
              round
              dense
              icon="fa-solid fa-ellipsis-vertical"
              @click="toggleLeftDrawer"
            />

            <q-drawer
              v-model="leftDrawerOpen"
              show-if-above
              :width="300"
              :breakpoint="400"
            >
              <drawer-app />
            </q-drawer>
          </q-toolbar>
        </q-header>
      </div>
    </div>
    <!-- Title -->
    <div class="row">
      <div class="col-12">
        <!-- <div class="row">
          <div class="col-10">
            <q-icon name="fa-solid fa-bars-staggered" />
          </div>
          <div class="col-1">
            <q-icon name="fa-solid fa-search" />
          </div>
          <div class="col-1">
            <q-icon name="fa-solid fa-bars-staggered" />
          </div>
        </div> -->
        <!-- <p class="text-h6">
          <q-icon name="fa-solid fa-bars-staggered" />&nbsp;&nbsp; Explore Alun
          <q-img
            src="https://alun.app/_nuxt/logo-text.347017d0.svg"
            width="70px"
          />
        </p> -->
      </div>
    </div>
    <relax-app />

    <!-- <activities-app /> -->

    <!-- <moods-app /> -->
    <!-- <div class="col-12">
      <p class="text-subtitle1">Welcome, Beta Tester</p>
    </div> -->
    <!-- <q-img src="/img/play.webp" :ratio="1" /> -->
    <!-- <featured-app /> -->
    <!-- <daily-moods /> -->
    <!-- <relax-app />
      <focus-app />
      <excersize-app /> -->
    <!-- <q-btn
      color="black"
      class="full-width q-my-lg"
      label="Explore"
      size="md"
      to="/updates"
    /> -->
    <!-- <share-app /> -->
    <!-- <guide-app /> -->
    <q-separator />
    <!-- <div class="row q-mt-md">
      <div class="col-12 text-center">
        <p>
          Copyright by Rupa Suara Audio Consultant @ 2023<br />All Rights
          Reseved
        </p>
      </div>
    </div> -->
  </q-page>
</template>
  
<script>
import { ref } from "vue";
import DrawerApp from "components/general/DrawerApp.vue";
// import { computed } from "vue";

import RelaxApp from "src/components/explore/RelaxApp.vue";
// import ActivitiesApp from "src/components/explore/ActivitiesApp.vue";
// import FeaturedStory from "src/components/home/FeaturedStory.vue";
// import MoodsApp from "src/components/explore/MoodsApp.vue";

// import GuideApp from "src/components/home/GuideApp.vue";
// import ShareApp from "src/components/home/ShareApp.vue";

import { defineComponent } from "vue";
// import DailyMoods from "src/components/explore/DailyMoods.vue";

export default defineComponent({
  data() {
    return {};
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
  components: {
    RelaxApp,
    // FeaturedApp,
    // ActivitiesApp,
    // FeaturedStory,
    // MoodsApp,
    // DailyMoods,
    DrawerApp,
    // GuideApp,
    // ShareApp,
  },
  name: "IndexPage",
});
</script>
  
