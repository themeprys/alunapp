<template>
  <div class="highlights">
    <div class="highlights_wrap text-center" v-if="result && result.moods">
      <router-link
        :to="`/play/` + mood.attributes.slug"
        v-for="(mood, index) in listMoods"
        :key="index"
      >
        <div class="highlights_item">
          <q-img src="/img/placeholder.webp" class="dot" />
          <p>{{ mood.attributes.title }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
  
<script>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      moods: [],
    };
  },
  components: {},
  name: "IndexPage",
  computed: {
    listMoods() {
      return this.result.moods.data.slice(0, 6);
    },
  },
  setup() {
    const { result } = useQuery(gql`
      query {
        moods {
          data {
            id
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
    `);
    return {
      result,
    };
  },
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