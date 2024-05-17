<template>
  <div class="facebookGallery row">
    <div class="col-xs-12 col-sm-6 col-md-3 col-xl-3">
      <div class="row flex wrap">
        <div class="col-auto" v-for="n in 22" :key="n">
          <div v-if="n > 0 && n <= 6">
            <img
              :src="
                './images/namestaj_po_meri/realizovani_projekti/' + n + '.webp'
              "
              @click="zoomImage(n)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 col-xl-3">
      <div class="row flex wrap">
        <div class="col-auto" v-for="n in 22" :key="n">
          <div v-if="n > 6 && n <= 11">
            <img
              :src="
                './images/namestaj_po_meri/realizovani_projekti/' + n + '.webp'
              "
              @click="zoomImage(n)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 col-xl-3">
      <div class="row flex wrap">
        <div class="col-auto" v-for="n in 22" :key="n">
          <div v-if="n > 11 && n <= 16">
            <img
              :src="
                './images/namestaj_po_meri/realizovani_projekti/' + n + '.webp'
              "
              @click="zoomImage(n)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 col-xl-3">
      <div class="row flex wrap">
        <div class="col-auto" v-for="n in 22" :key="n">
          <div v-if="n > 16 && n <= 22">
            <img
              :src="
                './images/namestaj_po_meri/realizovani_projekti/' + n + '.webp'
              "
              @click="zoomImage(n)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <q-dialog
    v-model="persistent"
    style="background: rgba(9, 29, 52, 0.8)"
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card style="width: 1500px">
      <q-carousel
        style="width: 100%; height: 700px"
        swipeable
        animated
        v-model="nImage"
        v-model:fullscreen="fullscreen"
        infinite
        control-color="white"
        arrows
      >
        <q-carousel-slide
          v-for="n in 22"
          :key="n"
          :name="n"
          :img-src="
            './images/namestaj_po_meri/realizovani_projekti/' + n + '.webp'
          "
        />
      </q-carousel>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";

const nImage = ref(0);
const persistent = ref(false);
const fullscreen = ref(false);

function zoomImage(n) {
  nImage.value = n;
  persistent.value = true;
}
</script>

<style scoped>
.facebookGallery img {
  max-width: 100%;
  margin-top: 6px;
  padding: 6px;
}
</style>
