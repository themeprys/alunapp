<template>
  <div class="row">
    <div class="col-12">
      <p class="text-h6">Featured</p>
    </div>
  </div>
  <div class="featured">
    <div class="featured_wrap">
      <q-card class="my-card" flat>
        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />

        <q-card-section class="q-pl-none">
          <div class="text-h6 q-pl-none">Story 1</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-pl-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          voluptas quaerat, reiciendis hic asperiores
        </q-card-section>
      </q-card>
      <q-card class="my-card" flat>
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
      </q-card>
    </div>
  </div>
</template>

<script>
export default {};
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
  grid-auto-columns: calc(80% - 4rem);
  min-height: 50vh;
}

.featured .featured_wrap .my-card {
  width: 90%;
  max-width: 250px;
}
</style>