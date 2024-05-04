<template>
  <q-page class="flex flex-center bg-positive">
    <!-- <pageHeader>
      <template #buttons-left>
        <mainHeader></mainHeader>
        <pageHeaderBtnBack label="Ambijenti"></pageHeaderBtnBack>
      </template>
      <template #title>Spavaće sobe</template>
    </pageHeader> -->

    <!-- <mainHeader></mainHeader> -->
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
import { useStoreSpavaceSobe } from "../../stores/storeSpavaceSobe ";
import { useStoreVisenamenskiNamestaj } from "../../stores/storeVisenamenskiNamestaj";
import selektovaniAmbijent from "../../components/saradnici/selektovaniAmbijent.vue";

const storeSpavaceSobe = useStoreSpavaceSobe();
const storeVisenamenskiNamestaj = useStoreVisenamenskiNamestaj();
const nazivAmbijenta = ref("Spavaće sobe");

const ambijenti = ref([
  {
    imagePath: "/images/ambijenti/spavace_sobe/",
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
    imagePath: "/images/krevet_samac/",
    slika: "/icons/krevet-samac.png",
    naziv: "drveni kreveti",
    selektovano: storeSpavaceSobe.drveniKreveti,
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
    imageExt: ".jpg",
  },

  {
    imagePath: "/images/ormari_plakari_garderoberi/spavaca/",
    slika: "/icons/plakari.png",
    naziv: "ormari, plakari",
    selektovano: storeSpavaceSobe.ormariPlakariGarderoberi,
    imageExt: ".jpg",
  },
]);
</script>
