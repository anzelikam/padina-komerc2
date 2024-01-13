<template>
  <q-page class="flex flex-center">
    <!-- <pageHeader>
      <template #title>Kuhinje i trpezarije</template>
    </pageHeader> -->

    <pageHeader>
      <template #buttons-left>
        <pageHeaderBtnBack label="Ambijenti"></pageHeaderBtnBack>
      </template>
      <template #title>Kuhinje i trpezarije</template>
    </pageHeader>
    <pageBody class="bg-dark">
      <div class="text-center">
        <div class="text-center" style="margin-top: 70px">
          <div class="col-2"></div>

          <div class="col-8">
            <h4 class="homePageText text-white">Kuhinje i trpezarije</h4>

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
// import { useStorePodgrupaAmbijenta } from "../stores/storePodgrupaAmbijenta";
import { useStoreKuhinje } from "../../stores/storeKuhinje";
import { useStoreVisenamenskiNamestaj } from "../../stores/storeVisenamenskiNamestaj";
import selektovaniAmbijent from "../../components/saradnici/selektovaniAmbijent.vue";

const storeKuhinje = useStoreKuhinje();
const storeVisenamenskiNamestaj = useStoreVisenamenskiNamestaj();

const ambijenti = ref([
  {
    imagePath: "/images/kuhinje/",
    slika: "/images/ambijenti/kuhinje_i_trpezarije.jpg",
    naziv: "kuhinje ambijenti",
    selektovano: storeKuhinje.kuhinje,
    imageExt: ".png",
  },
]);

const celineAmbijenta = ref([
  {
    imagePath: "/images/trpezarijski_stolovi/",
    slika: "/icons/trpezarijski-sto.png",
    naziv: "trpezarijski stolovi",
    selektovano: storeKuhinje.trpezarijskiStolovi,
    imageExt: ".jpg",
  },

  {
    imagePath: "/images/trpezarijske_stolice/",
    slika: "/icons/trpezarijska-stolica.png",
    naziv: "trpezarijske stolice",
    selektovano: storeKuhinje.trpezarijskeStolice,
    imageExt: ".jpg",
  },

  {
    imagePath: "/images/visenamenski_namestaj/kuhinjske_vitrine/",
    slika: "/icons/kuhinjska-vitrina.png",
    naziv: "vitrine",
    selektovano: storeVisenamenskiNamestaj.kuhinjskeVitrine,
    imageExt: ".png",
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

<style></style>
