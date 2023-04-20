<template>
  <!-- Activities -->
  <div class="row q-mb-md">
    <div class="col-12">
      <p class="text-h6">Selected Activities</p>
    </div>
    <q-list>
      <router-link
        :to="`/activities/` + contact.slug"
        v-for="contact in contacts"
        :key="contact.id"
      >
        <q-item class="bg-dark text-white q-my-sm q-py-md" clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="white" text-color="dark">
              {{ contact.letter }}
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ contact.name }}</q-item-label>
            <q-item-label caption lines="1" class="text-white">{{
              contact.email
            }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="fa-solid fa-play" color="white" />
          </q-item-section>
        </q-item>
      </router-link>
    </q-list>
  </div>
</template>

<script>
const contacts = [
  {
    id: 1,
    name: "Relax",
    email: "Improve relaxation on your daily break",
    letter: "R",
    slug: "relax",
  },
  {
    id: 2,
    name: "Focus",
    email: "Boost focus with concentration",
    letter: "F",
    slug: "focus",
  },
  {
    id: 3,
    name: "Excercise",
    email: "Pick your favourite workout",
    letter: "E",
    slug: "excercise",
  },
];

export default {
  setup() {
    return {
      contacts,
    };
  },
};
</script>

<style>
</style>