<template>
  <div v-if="result && result.moods">
    <div class="row">
      <div class="col">
        <q-img
          :src="
            `http://localhost:1337` +
            result.moods.data[0].attributes.icon.data.attributes.url
          "
          :ratio="1"
        />
      </div>
    </div>
    <h4 class="text-center">{{ result.moods.data[0].attributes.title }}</h4>

    <!-- <div
      v-for="(song, songIndex) in result.moods.data[0].attributes.frames.data"
      :key="song.id"
      v-on:click="playSong(songIndex)"
    >
      <div>
        {{ song.attributes.title }}
      </div>
    </div> -->

    <song-player
      v-bind:song="
        result.moods.data[0].attributes.frames.data[currentSongIndex]
      "
      @next="playNext"
      @previous="playPrevious"
    />
    <!-- <div
      v-for="(song, songIndex) in result.moods.data[0].attributes.frames.data"
      :key="songIndex"
    >
      <audio
        v-bind:src="
          `http://localhost:1337` + song.attributes.audio.data.attributes.url
        "
        preload="auto"
        autoplay
        ref="audioPlayer"
      />
    </div> -->

    <!-- <audio
      :src="`http://localhost:1337` + song.attributes.audio.data.attributes.url"
      preload="auto"
      autoplay
      ref="audioPlayer"
    /> -->

    <!-- <div
      v-for="song in result.moods.data[0].attributes.frames.data"
      :key="song.id"
    >
      <audio
        v-bind:src="
          `http://localhost:1337` + song.attributes.audio.data.attributes.url
        "
        preload="auto"
        autoplay
        ref="audioPlayer"
      />
    </div> -->
    <!-- <div class="grid grid-cols-3 mt-10">
      <div class="flex items-center justify-center">
        <button v-on:click="previous">Previous</button>
      </div>
      <div class="flex items-center justify-center">
        <button
          class="rounded-full bg-yellow-300 h-24 w-24 text-black font-bold"
          v-on:click="togglePlay"
        >
          {{ isPlaying ? "Pause" : "Play" }}
        </button>
      </div>
      <div class="flex items-center justify-center">
        <button v-on:click="next">Next</button>
      </div>
    </div> -->
    <!-- <button
      class="rounded-full bg-yellow-300 h-24 w-24 text-black font-bold"
      v-on:click="togglePlay"
    >
      {{ isPlaying ? "Pause" : "Play" }}
    </button> -->
    <!-- <audio
      v-bind:src="
        `http://localhost:1337` + song.attributes.audio.data.attributes.url
      "
      preload="auto"
      autoplay
      ref="audioPlayer"
    /> -->
    <!-- <button
      class="rounded-full bg-yellow-300 h-24 w-24 text-black font-bold"
      v-on:click="togglePlay"
    >
      {{ isPlaying ? "Pause" : "Play" }}
    </button> -->
    <!-- <div
      v-for="(song, index) in result.moods.data[0].attributes.frames.data"
      :key="index"
    >
      <audio
        v-bind:src="
          `http://localhost:1337` + song.attributes.audio.data.attributes.url
        "
        preload="auto"
        autoplay
        ref="audioPlayer"
      />
      <li>
        {{ song.attributes.audio.data.attributes.url }}
      </li>
    </div> -->
    <!-- {{ result }} -->
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { defineComponent } from "vue";
import SongPlayer from "./SongPlayer.vue";

export default defineComponent({
  data() {
    return {
      moods: [],
      //   isPlaying: true,
      currentSongIndex: 0,
    };
  },
  //   emits: ["goback", "next", "previous"],
  components: { SongPlayer },
  name: "SongList",
  setup() {
    const route = useRoute();
    const { result } = useQuery(
      gql`
        query ($slug: String!) {
          moods(filters: { slug: { eq: $slug } }) {
            data {
              id
              attributes {
                title
                slug
                activity {
                  data {
                    attributes {
                      title
                    }
                  }
                }
                icon {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
                frames {
                  data {
                    id
                    attributes {
                      title
                      audio {
                        data {
                          id
                          attributes {
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
      {
        slug: route.params.slug,
      }
    );
    return {
      result,
    };
  },
  methods: {
    playSong(index) {
      this.currentSongIndex = index;
    },
    playNext() {
      if (
        this.currentSongIndex <
        this.result.moods.data[0].attributes.frames.data.length - 1
      ) {
        this.currentSongIndex += 1;
      } else {
        this.currentSongIndex = 0;
      }
    },
    playPrevious() {
      if (this.currentSongIndex != 0) {
        this.currentSongIndex -= 1;
      } else {
        this.currentSongIndex =
          this.result.moods.data[0].attributes.frames.data.length - 1;
      }
    },
    // togglePlay() {
    //   if (this.isPlaying) {
    //     this.$refs.audioPlayer.pause();
    //   } else {
    //     this.$refs.audioPlayer.play();
    //   }
    //   this.isPlaying = !this.isPlaying;
    // },
    // goback() {
    //   this.$emit("goback");
    // },
    // next() {
    //   this.$emit("next");
    // },
    // previous() {
    //   this.$emit("previous");
    // },
  },
});
</script>
  
