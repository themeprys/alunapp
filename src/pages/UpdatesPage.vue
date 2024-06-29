<template>
  <q-page class="q-pa-md aln_updates_page">
    <!-- Title -->
    <div class="row">
      <div class="col-12">
        <p class="text-h6">
          <q-icon name="fa-regular fa-eye" />&nbsp;&nbsp;Read Updates
        </p>
      </div>
    </div>
    <post-card />
  </q-page>
</template>
  
<script>
import PostCard from "src/components/updates/PostCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    PostCard,
  },
  name: "IndexPage",
});
</script>
  
  <style>
</style>