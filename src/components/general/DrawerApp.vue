<template>
  <q-scroll-area
    style="
      height: calc(100% - 150px);
      margin-top: 150px;
      border-right: 1px solid #ddd;
    "
  >
    <q-list padding>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="fa-solid fa-greater-than-equal" />
        </q-item-section>
        <q-item-section> Beranda </q-item-section>
      </q-item>
      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="fa-solid fa-mobile-screen" />
        </q-item-section>

        <q-item-section> Tentang Alun </q-item-section>
      </q-item>
      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="fa-solid fa-rss" />
        </q-item-section>

        <q-item-section> Press Release </q-item-section>
      </q-item>
      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="fa-regular fa-pen-to-square" />
        </q-item-section>

        <q-item-section> Blog </q-item-section>
      </q-item>
      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="fa-solid fa-info" />
        </q-item-section>

        <q-item-section> Ketentuan Layanan </q-item-section>
      </q-item>
      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="fa-solid fa-user-group" />
        </q-item-section>

        <q-item-section> Kebijakan Privasi </q-item-section>
      </q-item>
      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="fa-solid fa-envelope-open-text" />
        </q-item-section>

        <q-item-section> Kontak Alun </q-item-section>
      </q-item>
    </q-list>
    <q-separator />
    <div class="q-pa-md">
      <p>Copyright by Rupa Suara Audio Consultant @ 2023. All Rights Reseved</p>
    </div>
  </q-scroll-area>

  <q-img
    class="absolute-top"
    src="https://www.alun.app/_nuxt/logo-text.347017d0.svg"
    style="height: 150px"
  >
  </q-img>
</template>

<script>
export default {};
</script>

<style>
</style>