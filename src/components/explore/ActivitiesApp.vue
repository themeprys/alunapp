<template>
<!-- Activities -->
<div class="row">
    <!-- <div class="col-12">
      <p class="text-h6">Selected Activities</p>
    </div> -->
    <div class="col-12">
        <q-list>
            <!-- <router-link to="/" v-for="contact in contacts" :key="contact.id"> -->
            <router-link :to="`/` + contact.slug" v-for="contact in contacts" :key="contact.id">
                <q-item class="bg-dark text-white q-my-sm q-py-lg" clickable v-ripple>
                    <q-item-section>
                        <q-item-label>{{ contact.name }}</q-item-label>
                        <q-item-label caption lines="2" class="text-white">{{
                contact.email
              }}</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                        <q-avatar rounded>
                            <img src="/img/aktivitas.webp">
                        </q-avatar>
                    </q-item-section>
                </q-item>
            </router-link>
        </q-list>
    </div>
</div>
</template>

<script>
const contacts = [{
        id: 1,
        name: "Fokus",
        email: "Membantu fokus untuk bekerja, belajar, atau aktivitas yang membutuhkan konsentrasi",
        letter: "F",
        slug: "fokus",
        src: '/img/aktivitas.webp'
    },
    {
        id: 2,
        name: "Relax",
        email: "Mendukung relaksasi untuk ketenangan pikiran dan istirahat tubuh",
        letter: "R",
        slug: "relax",
        src: '/img/aktivitas.webp'
    }
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
