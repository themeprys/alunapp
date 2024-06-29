<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <q-btn-group spread class="shadow-0">
          <q-btn icon="fa-solid fa-shuffle" @click="next" />
          <q-btn
            icon="fa-solid fa-play"
            class="play"
            v-if="!isPlaying"
            @click="play"
          />
          <q-btn icon="fa-solid fa-pause" class="pause" v-else @click="pause" />
          <q-btn icon="fa-solid fa-ellipsis" />
        </q-btn-group>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: "Grateful",
          artist: "Neffex",
          src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        },
        {
          title: "Invincible",
          artist: "Deaf Kev",
          src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        },
      ],
      player: new Audio(),
    };
  },
  methods: {
    autoloading() {
      if ((this.isPlaying = true)) {
        console.log(this.isPlaying);
      }
    },
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play({
        // autoplay: false,
      });
      this.player.addEventListener(
        "ended",
        function () {
          this.index++;
          if (this.index > this.songs.length - 1) {
            this.index = 0;
          }
          this.current = this.songs[this.index];
          this.play(this.current);
        }.bind(this)
      );
      this.isPlaying = true;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
    console.log("created");
    // this.player.play({
    //   autoplay: true,
    // });
  },

  //   created() {
  //     console.log(this.msg);
  //   },
  beforeMount() {
    console.log("before mount");
    // this.isPlaying = false;
    // this.player.src = this.current.src;
    // this.autoloading();
  },
  mounted() {
    console.log("mounted");
  },
  unmounted() {
    console.log("beforeDestroy hook called");
    this.msg = null;
    delete this.msg;
    this.isPlaying = false;
    // console.log("destroyed");
  },
  components: {
    // FeaturedApp,
    // ActivitiesApp,
    // FeaturedStory,
    // ExcersizeApp,
    // RelaxApp,
    // FocusApp,
    // GuideApp,
    // ShareApp,
  },
  name: "IndexPage",
  setup() {
    return {
      slide: ref(1),
    };
  },
});
</script>

