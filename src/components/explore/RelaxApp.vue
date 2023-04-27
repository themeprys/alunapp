<template>
  <div class="row">
    <div class="col-12">
      <p class="text-h6">Relax</p>
      <p>Reduce stress and unwind</p>
    </div>
  </div>
  <div class="featured">
    <div v-if="result && result.activities">
      <div
        v-for="(item, index) in result.activities.data[0].attributes"
        :key="index"
      >
        {{ item.data }}
      </div>
    </div>
    <!-- <div class="featured_wrap" v-if="result && result.activities">
      <q-card
        class="my-card"
        flat
        v-for="(update, index) in listStory"
        :key="index"
      >
        <router-link :to="`/updates/` + update.attributes.slug">
          <q-img
            :src="
              `https://api.alun.app` +
              update.attributes.cover.data.attributes.url
            "
            :ratio="1"
          />
        </router-link>

        <q-card-section class="q-pl-none">
          <router-link :to="`/updates/` + update.attributes.slug">
            <div class="text-h6 q-pl-none aln_our_story_title">
              {{ update.attributes.title }}
            </div>
          </router-link>
        </q-card-section>
      </q-card>
    </div> -->
  </div>
</template>
  
  <script>
import { date } from "quasar";

import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      activities: [],
    };
  },
  components: {},
  name: "IndexPage",
  filters: {
    truncate: function (text, length) {
      if (text.length > 100) {
        return text.substring(0, 100) + "...";
      } else {
        return text;
      }
    },
  },
  computed: {
    listStory() {
      return this.result.updates.data.slice().sort((b, a) => {
        return (
          new Date(a.attributes.postDate) - new Date(b.attributes.postDate)
        );

        // console.log(data.id);
        // a.attributes.postDate - b.attributes.postDate;
      });
    },
    dateconvert() {
      return (timeStamp) => {
        return date.formatDate(timeStamp, "DD MMM YY");
      };
    },
  },
  // date: date.formatDate(new Date(), "yyyy MM dd"),
  // date: new Date(),
  setup() {
    // const route = useRoute();
    const { result } = useQuery(
      gql`
        query ($slug: String!) {
          activities(filters: { slug: { eq: $slug } }) {
            data {
              attributes {
                title
                slug
                moods {
                  data {
                    attributes {
                      title
                      slug
                      icon {
                        data {
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
        slug: "relax",
      }
    );
    return {
      result,
    };
  },
});
</script>
  
  <style>
.featured {
  display: flex;
  justify-content: center;
}
.featured_wrap {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc(60% - 4rem);
  min-height: 50vh;
}

.featured .featured_wrap .my-card {
  width: 90%;
  max-width: 250px;
}
.aln_our_story_title {
  line-height: 25px;
}
</style>