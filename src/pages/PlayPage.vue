<template>
  <q-page class="q-pa-md aln_nowplaying">
    <div class="row">
      <div class="col-12">
        <p class="text-h6">
          <q-icon name="fa-solid fa-podcast" />&nbsp;&nbsp;Now Playing
        </p>
      </div>
    </div>
    <play-now />
    <!-- <div class="row text-center">
      <div class="col">
        <p class="title">Work</p>
      </div>
    </div> -->
  </q-page>
</template>
  
  <script>
import PlayNow from "src/components/play/PlayNow.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    PlayNow,
  },
  name: "IndexPage",
});
</script>
  
