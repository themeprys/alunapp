<template>
  <div>
    <audio
      v-bind:src="
        `https://api.alun.app` + frame.attributes.audio.data.attributes.url
      "
      preload="auto"
      autoplay
      ref="audioPlayer"
    />

    <div class="col-12">
      <q-btn-group spread class="shadow-0">
        <q-btn icon="fa-solid fa-ellipsis" />
        <q-btn v-on:click="togglePlay">
          {{ isPlaying ? "Pause" : "Play" }}
        </q-btn>
        <q-btn icon="fa-solid fa-shuffle" v-on:click="next" />
      </q-btn-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: true,
    };
  },
  emits: ["next"],
  methods: {
    togglePlay() {
      if (this.isPlaying) {
        this.$refs.audioPlayer.pause();
      } else {
        this.$refs.audioPlayer.play();
      }
      this.isPlaying = !this.isPlaying;
    },
    next() {
      this.$emit("next");
    },
  },
  props: {
    frame: {
      id: Number,
      title: String,
      url: String,
    },
  },
};
</script>

<style>
</style>
