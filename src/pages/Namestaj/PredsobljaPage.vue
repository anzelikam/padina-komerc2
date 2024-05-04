<template>
  <q-page class="flex flex-center bg-positive">
    <!-- <pageHeader>
      <template #buttons-left>
        <mainHeader></mainHeader>
        <pageHeaderBtnBack label="Ambijenti"></pageHeaderBtnBack>
      </template>
      <template #title>Predsoblja</template>
    </pageHeader> -->
    <pageBody class="bg-dark">
      <breadCrumbs></breadCrumbs>
      <div class="text-center">
        <div class="col-2"></div>

        <div class="col-8">
          <h5 class="text-white">{{ nazivAmbijenta.toUpperCase() }}</h5>

          <selektovaniAmbijent
            :nazivAmbijenta="nazivAmbijenta"
            :ambijenti="ambijenti"
            :celineAmbijenta="celineAmbijenta"
          >
          </selektovaniAmbijent>
        </div>
        <div class="col-2"></div>
      </div>
    </pageBody>
  </q-page>
</template>
<script setup>
import { ref } from "vue";

import { useStoreKancelarije } from "../../stores/storeKancelarije";
import { useStorePredsoblja } from "../../stores/storePredsoblja";
import { useStoreVisenamenskiNamestaj } from "../../stores/storeVisenamenskiNamestaj";
import selektovaniAmbijent from "../../components/saradnici/selektovaniAmbijent.vue";

const storePredsoblja = useStorePredsoblja();
const storeVisenamenskiNamestaj = useStoreVisenamenskiNamestaj();
const nazivAmbijenta = ref("Predsoblja");

const ambijenti = ref([
  {
    imagePath: "/images/ambijenti/predsoblja/",
    slika: "/images/ambijenti/predsoblja.jpg",
    naziv: "predsoblja ambijenti",
    selektovano: storePredsoblja.predsoblja,
    imageExt: ".jpg",
  },
]);

const celineAmbijenta = ref([
  {
    imagePath: "/images/predsoblja/",
    slika: "/icons/kolekcije-predsoblja.png",
    naziv: "kolekcije",
    selektovano: storePredsoblja.kolekcije,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/cipelari/",
    slika: "/icons/cipelarnik.png",
    naziv: "cipelarnici",
    selektovano: storePredsoblja.cipelari,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/visenamenski_namestaj/komode/",
    slika: "/icons/komoda.png",
    naziv: "komode",
    selektovano: storeVisenamenskiNamestaj.komode,
    imageExt: ".jpg",
  },
]);
</script>
