<template>
  <q-page class="q-pa-md aln_storyhighlight">
    <!-- Title -->
    <div class="row">
      <div class="col-12">
        <p class="text-h6">
          <q-icon name="fa-solid fa-greater-than-equal" />&nbsp;&nbsp;Explore
          Alun
        </p>
      </div>
    </div>
    <moods-app />
    <div class="col-12">
      <p class="text-subtitle1">Welcome, Beta Tester</p>
    </div>
    <q-img src="/img/play.webp" :ratio="1" />
    <!-- <featured-app /> -->
    <daily-moods />
    <!-- <relax-app />
      <focus-app />
      <excersize-app /> -->
    <activities-app />
    <featured-story />
    <q-btn
      color="black"
      class="full-width q-my-lg"
      label="Browse More"
      size="md"
      to="/updates"
    />
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
// import { computed } from "vue";

// import DailyMoods from "src/components/explore/DailyMoods.vue";
import ActivitiesApp from "src/components/explore/ActivitiesApp.vue";
import FeaturedStory from "src/components/home/FeaturedStory.vue";
import MoodsApp from "src/components/explore/MoodsApp.vue";

// import GuideApp from "src/components/home/GuideApp.vue";
// import ShareApp from "src/components/home/ShareApp.vue";

import { defineComponent } from "vue";
import DailyMoods from "src/components/explore/DailyMoods.vue";

export default defineComponent({
  data() {
    return {};
  },
  components: {
    // FeaturedApp,
    ActivitiesApp,
    FeaturedStory,
    MoodsApp,
    DailyMoods,
    // GuideApp,
    // ShareApp,
  },
  name: "IndexPage",
});
</script>
  
