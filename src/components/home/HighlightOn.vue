<template>
  <q-page class="aln_nowplaying">
    <div class="row q-pa-md">
      <div class="col-12">
        <!-- {{ mood.attributes.icon.data.attributes.url }} -->
        <q-img
          :src="
            `https://api.alun.app` + mood.attributes.cover.data.attributes.url
          "
          ratio="1"
          class="q-my-md"
          v-if="!startSession"
        />
        <q-img
          :src="
            `https://api.alun.app` + mood.attributes.icon.data.attributes.url
          "
          :ratio="1"
          v-if="startSession"
        />
        <p class="text-h6 text-center">
          {{ mood.attributes.title }}
        </p>
        <p class="text-center">
          {{ mood.attributes.teaser }}
        </p>
        <!-- <p>Frame List:</p> -->
        <!-- {{ mood.attributes.frames.data }} -->
        <!-- <div
          v-for="(frame, frameIndex) in listFrames"
          :key="frame.id"
          v-on:click="playFrame(frameIndex)"
        >
          <p>{{ frame.attributes.title }} | {{ frame.id }}</p>
        </div> -->
        <q-btn
          v-if="!startSession"
          class="full-width"
          rounded
          color="black"
          v-on:click="playSession()"
          >Start Session</q-btn
        >
        <session-player
          v-if="startSession"
          v-bind:frame="listFrames[currentFrameIndex]"
          @next="playNext"
        />
      </div>
      <div class="col-12 q-mt-lg" v-if="!startSession">
        <p class="text-bold text-uppercase">{{ mood.attributes.title }}</p>
        <hr />
        <div v-html="mood.attributes.description"></div>
      </div>
      <div class="col-12 q-mt-lg" v-if="!startSession">
        <p class="text-bold text-uppercase">How It Works</p>
        <hr />
        <div v-html="mood.attributes.howItWorks"></div>
      </div>
      <div class="col-12 q-mt-lg" v-if="!startSession">
        <p class="text-bold text-uppercase">Credits</p>
        <hr />
        <div v-html="mood.attributes.credits"></div>
      </div>
    </div>
    <!-- <play-now /> -->
    <!-- <div class="row text-center">
      <div class="col">
        <p class="title">Work</p>
      </div>
    </div> -->
  </q-page>

  <!-- <div>
    <h3>{{ mood.attributes.title }}</h3>
  </div> -->
</template>

<script>
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { defineComponent } from "vue";
import SessionPlayer from "./SessionPlayer.vue";

export default {
  components: { SessionPlayer },
  data() {
    return {
      startSession: false,
      currentFrameIndex: 0,
    };
  },
  components: {
    SessionPlayer,
  },
  props: {
    mood: {
      id: Number,
      title: String,
      url: String,
    },
  },
  emits: ["next"],
  methods: {
    playSession(index) {
      this.startSession = true;
    },
    playFrame(index) {
      this.currentFrameIndex = index;
      this.$refs.audioPlayer.play();
    },
    playNext() {
      if (this.currentFrameIndex < this.listFrames.length - 1) {
        this.currentFrameIndex += 1;
      } else {
        this.currentFrameIndex = 0;
      }
    },
  },
  computed: {
    listFrames() {
      return this.mood.attributes.frames?.data;
    },
  },
};
</script>

<style>
</style>