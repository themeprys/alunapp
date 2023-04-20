<template>
  <div class="row">
    <div class="col-12">
      <p class="text-h6">Read Our Story</p>
    </div>
  </div>
  <div class="featured">
    <div class="featured_wrap" v-if="result && result.updates">
      <q-card
        class="my-card"
        flat
        v-for="(update, index) in listStory"
        :key="index"
      >
        <router-link :to="`/updates/` + update.attributes.slug">
          <q-img
            :src="
              `http://localhost:1337` +
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

        <q-card-section class="q-pt-none q-pl-none">
          <p>
            by {{ update.attributes.author.data.attributes.name }} |
            {{ dateconvert(update.attributes.postDate) }}
          </p>
          <div v-html="$options.filters.truncate(update.attributes.body)"></div>
        </q-card-section>

        <!-- <q-card-section class="q-pt-none q-pl-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          voluptas quaerat, reiciendis hic asperiores
        </q-card-section> -->
      </q-card>
      <!-- <q-card class="my-card" flat>
        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />

        <q-card-section class="q-pl-none">
          <div class="text-h6 q-pl-none">Story 2</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-pl-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          voluptas quaerat, reiciendis hic asperiores
        </q-card-section>
      </q-card>
      <q-card class="my-card" flat>
        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />

        <q-card-section class="q-pl-none">
          <div class="text-h6 q-pl-none">Guidelines</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-pl-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          voluptas quaerat, reiciendis hic asperiores
        </q-card-section>
      </q-card>
      <q-card class="my-card" flat>
        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />

        <q-card-section class="q-pl-none">
          <div class="text-h6 q-pl-none">Story 3</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-pl-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          voluptas quaerat, reiciendis hic asperiores
        </q-card-section>
      </q-card>
      <q-card class="my-card" flat>
        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />

        <q-card-section class="q-pl-none">
          <div class="text-h6 q-pl-none">Guidelines</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-pl-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          voluptas quaerat, reiciendis hic asperiores
        </q-card-section>
      </q-card>
      <q-card class="my-card" flat>
        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />

        <q-card-section class="q-pl-none">
          <div class="text-h6 q-pl-none">Guidelines</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-pl-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          voluptas quaerat, reiciendis hic asperiores
        </q-card-section>
      </q-card> -->
    </div>
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
      updates: [],
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
    const { result } = useQuery(gql`
      query {
        updates {
          data {
            id
            attributes {
              postDate
              title
              slug
              body
              author {
                data {
                  attributes {
                    name
                  }
                }
              }
              cover {
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
    `);
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
  grid-auto-columns: calc(90% - 4rem);
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