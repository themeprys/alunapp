<template>
<q-page class="q-pa-md aln_nowplaying">
    <q-header class="bg-white text-dark">
        <q-toolbar>
            <q-toolbar-title class="text-bold q-ml-sm">A L U N</q-toolbar-title>
        </q-toolbar>
    </q-header>
    <!-- Title -->
    <div class="row">
        <div class="col-12">
            <p class="text-h4 text-center q-pb-none q-mb-none">Alunan Fokus</p>
            <p class="text-h6 text-center">Forest Stream</p>
        </div>
    </div>
    <div class="row text-center">
        <div class="col">
            <p class="text-subtitle title text-purple">Detail</p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <q-img src="/img/fokus.webp" :ratio="1" />
        </div>
    </div>
    <!-- <player-app /> -->
    <!-- <div class="row q-mb-lg q-pb-lg">
        <div class="col">
            <q-btn-group spread class="shadow-0">
            <q-btn icon="fa-solid fa-shuffle" @click="next" />
                <q-btn icon="fa-solid fa-play" class="play" v-if="!isPlaying" @click="play" />
                <q-btn icon="fa-solid fa-pause" class="pause" v-else @click="pause" />
                <q-btn icon="fa-solid fa-ellipsis" />
            </q-btn-group>
        </div>
    </div> -->
    <player-fokus />
    <div class="row q-mt-xl q-pt-sm">
        <div class="col q-pa-xs">
            <q-btn href="https://beta.alun.app/" color="black" class="full-width" label="Alun" size="md" />
        </div>
        <div class="col q-pa-xs">
            <q-btn to="/aktivitas" color="black" class="full-width" label="Aktivitas" size="md" />
        </div>
    </div>
    <!-- <div>{{ store.isPlaying }}</div>
    <div class="row q-mt-md q-pt-sm">
      <div class="col">
        <q-btn
          to="/"
          color="black"
          class="full-width"
          label="Explore More"
          size="md"
        />
      </div>
    </div> -->
    <!-- <featured-app />
    <activities-app />
    <featured-story /> -->

    <!-- <share-app />
    <guide-app />
    <q-separator />
    <div class="row q-mt-md">
      <div class="col-12 text-center">
        <p>
          Copyright by Rupa Suara Audio Consultant @ 2023<br />All Rights
          Reseved
        </p>
      </div>
    </div> -->
</q-page>
</template>

<script>
import {
    defineComponent
} from "vue";
import {
    ref
} from "vue";

import {
    computed
} from "vue";

import PlayerFokus from "src/components/PlayerFokus.vue";
// import PlayerOnly from "src/components/PlayerOnly.vue";

export default defineComponent({
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [{
                    title: "Forest Stream",
                    artist: "Aghi",
                    src: "https://api.alun.app/uploads/focus_6bc7430384.mp3",
                },
                {
                    title: "Forest Stream",
                    artist: "Aghi",
                    src: "https://api.alun.app/uploads/focus_6bc7430384.mp3",
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
        autoplay: false,
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
      this.play(this.current);
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
    // console.log("created");
    // this.player.play({
    //   autoplay: true,
    // });
  },

  //   created() {
  //     console.log(this.msg);
  //   },
  beforeMount() {
    // console.log("before mount");
    this.isPlaying = false;
    this.player.src = this.current.src;
    this.autoloading();
  },
  mounted() {
    // console.log("mounted");
  },
  unmounted() {
    console.log("beforeDestroy hook called");
    this.msg = null;
    delete this.msg;
    this.isPlaying = false;
    // console.log("destroyed");
  },
  components: {
    // PlayerOnly,
    PlayerFokus,
    // PlayerApp,
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
});
</script>

<style>
.aln_nowplaying p.title {
    font-weight: bold;
    font-size: 20px;
    padding: 20px 0;
}

.song-title {
    color: #53565a;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
}

.song-title span {
    font-weight: 400;
    font-style: italic;
}

.controls {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 15px;
}

button {
    appearance: none;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
}

button:hover {
    opacity: 0.8;
}

/* .play,
.pause {
  font-size: 20px;
  font-weight: 700;
  padding: 15px 25px;
  margin: 0px 15px;
  border-radius: 8px;
  color: #fff;
  background-color: #cc2e5d;
} */
/* .next,
.prev {
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  margin: 0px 15px;
  border-radius: 6px;
  color: #fff;
  background-color: #ff5858;
} */
.playlist {
    padding: 0px 30px;
}

.playlist h3 {
    color: #212121;
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 30px;
    text-align: center;
}

.playlist .song {
    display: block;
    width: 100%;
    padding: 15px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
}

.playlist .song:hover {
    color: #ff5858;
}

.playlist .song.playing {
    color: #fff;
    background-image: linear-gradient(to right, #cc2e5d, #ff5858);
}
</style>
