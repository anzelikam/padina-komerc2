<!-- <template>
  <q-page class="flex flex-center bg-positive">
    <pageHeader>
      <template #buttons-left>
        <pageHeaderBtnBack label="Ambijenti"></pageHeaderBtnBack>
      </template>
      <template #title>Spavace sobe</template>
    </pageHeader>
    <pageBody>
      <div>Spavace sobe</div>
    </pageBody>
  </q-page>
</template> -->

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
    naziv: "spavaće sobe",
    selektovano: storeSpavaceSobe.spavaceSobe,
    imageExt: ".jpg",
  },
]);

const celineAmbijenta = ref([
  {
    imagePath: "/images/francuski_lezajevi/",
    slika: "/icons/ugaona.png",
    naziv: "francuski ležajevi",
    selektovano: storeSpavaceSobe.francuskiLezajevi,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/nocni_ormarici/",
    slika: "/icons/ugaona.png",
    naziv: "noćni ormarići",
    selektovano: storeSpavaceSobe.nocniOrmarici,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/visenamenski_namestaj/komode/",
    slika: "/icons/dnevna-komoda.png",
    naziv: "komode",
    selektovano: storeVisenamenskiNamestaj.komode,
    imageExt: ".png",
  },
  // {
  //   imagePath: "/images/tdf_garniture/",
  //   slika: "/icons/trosed-dvosed-fotelja.png",
  //   naziv: "tdf garniture",
  //   selektovano: storeDnevneSobe.tdfGarniture,
  //   imageExt: ".jpg",
  // },
]);

// const celineAmbijenta = ref([
//   {
//     imagePath: "/images/ugaone_garniture/",
//     slika: "/icons/ugaona.png",
//     naziv: "ugaone garniture",
//     selektovano: storeDnevneSobe.ugaoneGarniture,
//     imageExt: ".jpg",
//   },
//   {
//     imagePath: "/images/tdf_garniture/",
//     slika: "/icons/trosed-dvosed-fotelja.png",
//     naziv: "tdf garniture",
//     selektovano: storeDnevneSobe.tdfGarniture,
//     imageExt: ".jpg",
//   },
//   {
//     imagePath: "/images/fotelje_i_taburei/",
//     slika: "/icons/fotelja.png",
//     naziv: "fotelje i taburei",
//     selektovano: storeDnevneSobe.foteljeItaburei,
//     imageExt: ".jpg",
//   },

//   {
//     imagePath: "/images/kaucevi/",
//     slika: "/icons/kauc.png",
//     naziv: "kaučevi",
//     selektovano: storeDnevneSobe.kaucevi,
//     imageExt: ".jpg",
//   },
//   {
//     imagePath: "/images/lezajevi/",
//     slika: "/icons/lezaj.png",
//     naziv: "ležajevi",
//     selektovano: storeDnevneSobe.lezajevi,
//     imageExt: ".jpg",
//   },

//   {
//     imagePath: "/images/klub_stolovi/",
//     slika: "/icons/klub-sto.png",
//     naziv: "klub stolovi",
//     selektovano: storeDnevneSobe.klubStolovi,
//     imageExt: ".png",
//   },

//   {
//     imagePath: "/images/visenamenski_namestaj/komode/",
//     slika: "/icons/dnevna-komoda.png",
//     naziv: "komode",
//     selektovano: storeVisenamenskiNamestaj.komode,
//     imageExt: ".png",
//   },
//   {
//     imagePath: "/images/visenamenski_namestaj/vitrine/",
//     slika: "/icons/dnevna-vitrina.png",
//     naziv: "vitrine",
//     selektovano: storeVisenamenskiNamestaj.vitrine,
//     imageExt: ".png",
//   },
// ]);
</script>
