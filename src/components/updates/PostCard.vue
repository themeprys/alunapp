<template>
  <div class="row" v-if="result && result.updates">
    <div class="col-12 aln_updates_card">
      <router-link
        :to="`/updates/` + update.attributes.slug"
        v-for="(update, index) in listStory"
        :key="index"
      >
        <q-card class="my-card q-mb-lg">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-section>
            <div class="text-h6">{{ update.attributes.title }}</div>
            <div class="text-subtitle2">
              by {{ update.attributes.author.data.attributes.name }} |
              {{ dateconvert(update.attributes.postDate) }}
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div
              v-html="$options.filters.truncate(update.attributes.body)"
            ></div>
          </q-card-section>
        </q-card>
      </router-link>
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
.aln_updates_card a {
  text-decoration: none;
  color: black;
}
</style>