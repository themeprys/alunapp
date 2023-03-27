<template>
  <q-page class="q-pa-md">
    <!-- Title -->
    <div class="row">
      <div class="col-12">
        <p class="text-h6">
          <q-icon name="fa-solid fa-greater-than-equal" />&nbsp;&nbsp;Browse
          Alun
        </p>
      </div>
    </div>

    <!-- Highlights -->
    <div class="highlights">
      <div class="highlights_wrap text-center">
        <div class="highlights_item">
          <span class="dot"></span>
          <p>Deep Sleep</p>
        </div>
        <div class="highlights_item">
          <span class="dot"></span>
          <p>Recovery</p>
        </div>
        <div class="highlights_item">
          <span class="dot"></span>
          <p>Self Care</p>
        </div>
        <div class="highlights_item">
          <span class="dot"></span>
          <p>Meditation</p>
        </div>
        <div class="highlights_item">
          <span class="dot"></span>
          <p>Work</p>
        </div>
        <div class="highlights_item">
          <span class="dot"></span>
          <p>Study</p>
        </div>
        <div class="highlights_item">
          <span class="dot"></span>
          <p>Colling Down</p>
        </div>
      </div>
    </div>
    <featured-app />
    <!-- <div class="row">
      <div class="col text-center">
        <i class="fa-solid fa-person-rays fa-4x"></i>
        <p class="text-h6">Focus</p>
      </div>
      <div class="col text-center">
        <i class="fa-solid fa-person-rays fa-4x"></i>
        <p class="text-h6">Focus</p>
      </div>
      <div class="col text-center">
        <i class="fa-solid fa-person-rays fa-4x"></i>
        <p class="text-h6">Focus</p>
      </div>
      <div class="col text-center">
        <i class="fa-solid fa-person-rays fa-4x"></i>
        <p class="text-h6">Focus</p>
      </div>
    </div> -->
    <activities-app />
    <!-- <relax-app />
    <focus-app />
    <excersize-app /> -->
    <featured-story />
    <q-btn color="black" class="full-width" label="Browse More" size="md" />
    <share-app />
    <guide-app />
    <q-separator />
    <div class="row q-mt-md">
      <div class="col-12 text-center">
        <p>
          Copyright by Rupa Suara Audio Consultant @ 2023<br />All Rights
          Reseved
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
import ActivitiesApp from "src/components/home/ActivitiesApp.vue";
import FeaturedApp from "src/components/home/FeaturedApp.vue";
import FeaturedStory from "src/components/home/FeaturedStory.vue";
// import RelaxApp from "src/components/home/RelaxApp.vue";
// import FocusApp from "src/components/home/FocusApp.vue";
// import ExcersizeApp from "src/components/home/ExcersizeApp.vue";

import GuideApp from "src/components/home/GuideApp.vue";
import ShareApp from "src/components/home/ShareApp.vue";
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  components: {
    FeaturedApp,
    ActivitiesApp,
    FeaturedStory,
    // ExcersizeApp,
    // RelaxApp,
    // FocusApp,
    GuideApp,
    ShareApp,
  },
  name: "IndexPage",
  setup() {
    return {
      slide: ref(1),
    };
  },
});
</script>

<style>
.highlights {
  display: flex;
  justify-content: center;
}
.highlights_wrap {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc(45% - 4rem);
  min-height: 15vh;
}

.dot {
  height: 80px;
  width: 80px;
  background-color: #000;
  border-radius: 50%;
  display: inline-block;
}
</style>