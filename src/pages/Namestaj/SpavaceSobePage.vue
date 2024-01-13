<template>
  <q-page class="flex flex-center bg-positive">
    <pageHeader>
      <template #buttons-left>
        <pageHeaderBtnBack label="Ambijenti"></pageHeaderBtnBack>
      </template>
      <template #title>Spavaće sobe</template>
    </pageHeader>
    <pageBody class="bg-dark">
      <div class="text-center">
        <div class="text-center" style="margin-top: 70px">
          <div class="col-2"></div>

          <div class="col-8">
            <h4 class="homePageText text-white">Spavaće sobe</h4>

            <br />

            <selektovaniAmbijent
              :ambijenti="ambijenti"
              :celineAmbijenta="celineAmbijenta"
            >
            </selektovaniAmbijent>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </pageBody>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useStoreSpavaceSobe } from "../../stores/storeSpavaceSobe ";
import { useStoreVisenamenskiNamestaj } from "../../stores/storeVisenamenskiNamestaj";
import selektovaniAmbijent from "../../components/saradnici/selektovaniAmbijent.vue";

const storeSpavaceSobe = useStoreSpavaceSobe();
const storeVisenamenskiNamestaj = useStoreVisenamenskiNamestaj();

const ambijenti = ref([
  {
    imagePath: "/images/spavace_sobe/",
    slika: "/images/ambijenti/spavace_sobe.jpg",
    naziv: "spavaće sobe ambijenti",
    selektovano: storeSpavaceSobe.spavaceSobe,
    imageExt: ".jpg",
  },
]);

const celineAmbijenta = ref([
  {
    imagePath: "/images/francuski_lezajevi/",
    slika: "/icons/francuski-lezaj.png",
    naziv: "francuski ležajevi",
    selektovano: storeSpavaceSobe.francuskiLezajevi,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/nocni_ormarici/",
    slika: "/icons/nocni-ormaric.png",
    naziv: "noćni ormarići",
    selektovano: storeSpavaceSobe.nocniOrmarici,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/visenamenski_namestaj/komode/",
    slika: "/icons/komoda.png",
    naziv: "komode",
    selektovano: storeVisenamenskiNamestaj.komode,
    imageExt: ".png",
  },
  {
    imagePath: "/images/ormari_plakari_garderoberi/",
    slika: "/icons/plakari.png",
    naziv: "ormari, plakari, garderoberi",
    selektovano: storeSpavaceSobe.ormariPlakariGarderoberi,
    imageExt: ".jpg",
  },
]);
</script>
