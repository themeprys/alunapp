<template>
  <div class="row">
    <div class="col-12">
      <audio
        v-bind:src="
          `https://api.alun.app` + song.attributes.audio.data.attributes.url
        "
        preload="auto"
        autoplay
        ref="audioPlayer"
      />
    </div>
    <div class="col-12">
      <q-btn-group spread class="shadow-0">
        <q-btn v-on:click="togglePlay">
          {{ isPlaying ? "Pause" : "Play" }}
        </q-btn>

        <q-btn icon="fa-solid fa-shuffle" v-on:click="next" />
        <!-- <q-btn icon="fa-regular fa-clock" /> -->
        <q-btn icon="fa-solid fa-ellipsis" />
      </q-btn-group>
    </div>

    <!-- <div class="col-3">
      <q-btn v-on:click="previous">Previous</q-btn>
    </div>
    <div class="col-6 text-center">
      <q-btn size="xl" round color="dark" v-on:click="togglePlay">
        {{ isPlaying ? "Pause" : "Play" }}
      </q-btn>
    </div>
    <div class="col-3">
      <q-btn v-on:click="next">Next</q-btn>
    </div> -->
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      isPlaying: true,
    };
  },
  name: "SongPlayer",
  props: {
    song: {
      id: Number,
      name: String,
      artistName: String,
      albumName: String,
      year: Number,
      src: String,
      songSrc: String,
    },
  },
  emits: ["goback", "next", "previous"],
  methods: {
    goback() {
      this.$emit("goback");
    },
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
    previous() {
      this.$emit("previous");
    },
  },
};
</script>