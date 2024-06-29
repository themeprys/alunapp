<template>
<q-page class="q-pa-md aln_storyhighlight">
    <q-header class="bg-white text-dark">
        <q-toolbar>
            <q-toolbar-title class="text-bold q-ml-sm">A L U N</q-toolbar-title>
            <!-- <q-btn dense flat icon="close" v-if="isHighlightOn && !isFocusOn" @click="closeHighlights()" /> -->
            <!-- <bar-app /> -->
        </q-toolbar>
    </q-header>
    <!-- <div class="row">
      <div class="col-12">
        <q-header class="bg-white text-dark">
          <q-toolbar>
            <q-toolbar-title class="text-bold q-ml-sm">A L U N</q-toolbar-title>
            <q-drawer
              v-model="leftDrawerOpen"
              show-if-above
              :width="300"
              :breakpoint="400"
            >
              <drawer-app />
            </q-drawer>
            <bar-app />
          </q-toolbar>
        </q-header>
      </div>
    </div> -->
    <!-- <highlight-story /> -->
    <!-- <div class="highlights" v-if="!isHighlightOn">
        <div class="highlights_wrap text-center" v-if="result && result.moods">
            <div v-for="(mood, index) in listMoods" :key="mood.id" v-on:click="playHighlights(index)">
                <div class="highlights_item">
                    <q-img src="/img/placeholder.webp" class="dot" />
                    <p>{{ mood.attributes.title }}</p>
                </div>
            </div>
        </div>
    </div> -->
    <div v-if="isHighlightOn">
        <highlight-on v-bind:mood="listMoods[currentHighlightIndex]" @player-on="focusOn" @explore-on="exploreOn" />
    </div>
    <div v-if="!isHighlightOn">
        <!-- <q-img src="/img/play.webp" :ratio="1" /> -->

        <!-- <div class="row q-mb-md">
            <div class="col-12">
                <p class="text-h6">Pilih Kategori</p>
            </div>
            <div class="col-12 flex" v-if="result && result.moods">
                <div v-for="(mood, index) in result.moods.data" :key="index">
                    <div v-on:click="playHighlights(index)">
                        <q-chip class="glossy" color="dark" text-color="white">
                            {{ mood.attributes.title }}
                        </q-chip>
                    </div>
                </div>
            </div>
            <div class="col-12 q-pt-md">
                <p>
                    Elevate your mind with personalized ambient sound. Alun provide you
                    AI generated ambient sound that's personalized to improve your
                    mental health daily activities
                </p>
            </div>
        </div> -->

        <div v-if="exploreOn">
            <p class="text-h6">Pilih Aktivitas</p>
        </div>
        <!-- <daily-moods /> -->
        <activities-app />
        <!-- <featured-story /> -->
        <!-- <q-btn color="black" class="full-width q-my-sm" label="Explore More" size="md" to="/updates" /> -->
        <!-- <share-app /> -->
        <!-- <guide-app /> -->
        <q-separator />
        <div class="row q-mt-md">
            <div class="col-12 text-center">
                <p>
                    Copyright by Rupa Suara Audio Consultant @ 2023<br />All Rights
                    Reseved
                </p>
            </div>
        </div>
    </div>
    <q-footer bordered class="bg-white text-dark" v-if="!isFocusOn">
        <div class="q-gutter-y-md" style="max-width: 600px">
            <q-tabs v-model="tab" inline-label>
                <q-route-tab href="https://beta1-dashboard.alun.app/" name="home" label="beranda" class="text-lowercase"/>
                <q-route-tab to="/" name="home" label="aktivitas"  class="text-lowercase"/>                
                <q-route-tab to="/fokus" name="home" label="fokus"  class="text-lowercase"/>                
                <q-route-tab to="/relax" name="home" label="relax"  class="text-lowercase"/>
              </q-tabs>
        </div>
    </q-footer>
</q-page>
</template>

<script>
import {
    useQuery
} from "@vue/apollo-composable";
import gql from "graphql-tag";

import {
    ref
} from "vue";
import {
    defineComponent
} from "vue";
// import { computed } from "vue";

// import DrawerApp from "components/general/DrawerApp.vue";
// import BarApp from "src/components/BarApp.vue";
import HighlightOn from "src/components/home/HighlightOn.vue";
// import DailyMoods from "src/components/explore/DailyMoods.vue";
import ActivitiesApp from "src/components/explore/ActivitiesApp.vue";
// import FeaturedStory from "src/components/home/FeaturedStory.vue";

// import GuideApp from "src/components/home/GuideApp.vue";
// import ShareApp from "src/components/home/ShareApp.vue";
// import SongPlayer from "src/components/play/SongPlayer.vue";
// import HighlightStory from "src/components/home/HighlightStory.vue";

export default defineComponent({
    data() {
        return {
            mood: [],
            isExploreOn: false,
            isHighlightOn: false,
            isFocusOn: false,
            currentHighlightIndex: 0,
        };
    },
    setup() {
        const leftDrawerOpen = ref(false);
        const {
            result
        } = useQuery(gql `
      query {
        moods {
          data {
            id
            attributes {
              title
              teaser
              description
              howItWorks
              credits
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
              cover {
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
    `);
        return {
            tab: ref("mails"),
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
            result,
        };
    },
    methods: {
        playHighlights(index) {
            this.currentHighlightIndex = index;
            this.isHighlightOn = true;
        },
        closeHighlights() {
            this.isHighlightOn = false;
        },
        focusOn() {
            this.isFocusOn = true;
        },
        exploreOn() {
            this.isExploreOn = true;
            this.isHighlightOn = true;
            this.isFocusOn = false;
            console.log("hi explore");
        },
    },
    computed: {
        listMoods() {
            return this.result.moods.data.slice(0, 6);
        },
    },

    components: {
        // DrawerApp,
        // BarApp,
        HighlightOn,
        ActivitiesApp,
        // FeaturedStory,
        // DailyMoods,
        // GuideApp,
        // ShareApp,
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
