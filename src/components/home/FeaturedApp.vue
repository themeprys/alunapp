<template>
  <!-- Featured -->
  <div class="row q-my-md">
    <div class="col-12 q-mt-lg">
      <p class="text-subtitle1">Welcome, Beta Tester</p>
    </div>
    <div class="col-12">
      <q-carousel
        animated
        v-model="slide"
        arrows
        infinite
        autoplay
        style="height: 300px"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  setup() {
    return {
      slide: ref(1),
    };
  },
});
</script>

<style>
</style>