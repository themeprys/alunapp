<template>
  <!-- Activities -->
  <div class="row q-mb-md">
    <div class="col-12">
      <p class="text-h6">Your Daily Moods</p>
    </div>
    <div class="col-12 flex" v-if="result && result.moods">
      <div v-for="(mood, index) in result.moods.data" :key="index">
        <router-link :to="`/play/` + mood.attributes.slug">
          <q-chip class="glossy" color="dark" text-color="white">
            {{ mood.attributes.title }}
          </q-chip>
        </router-link>
      </div>
    </div>
    <div class="col-12 q-pt-md">
      <p>
        Elevate your mind with personalized ambient sound. Alun provide you AI
        generated ambient sound that's personalized to improve your mental
        health daily activities
      </p>
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
</style>