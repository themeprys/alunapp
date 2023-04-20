<template>
  <q-page class="q-pa-md aln_storyhighlight">
    <!-- Title -->
    <div class="row">
      <div class="col-12">
        <p class="text-h6">
          <q-icon name="fa-solid fa-podcast" />&nbsp;&nbsp;Now Playing
        </p>
      </div>
    </div>

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
import GuideApp from "src/components/home/GuideApp.vue";
import ShareApp from "src/components/home/ShareApp.vue";

import { defineComponent } from "vue";
import { ref } from "vue";

import { computed } from "vue";

export default defineComponent({
  components: {
    GuideApp,
    ShareApp,
  },
  name: "IndexPage",
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
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid #333;
}

.aln_storyhighlight a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
</style>