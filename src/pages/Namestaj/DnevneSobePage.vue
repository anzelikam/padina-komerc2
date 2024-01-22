<template>
  <q-page class="flex flex-center bg-positive">
    <pageHeader>
      <template #buttons-left>
        <mainHeader></mainHeader>
        <pageHeaderBtnBack label="Ambijenti"></pageHeaderBtnBack>
      </template>
      <template #title>Dnevne sobe</template>
    </pageHeader>
    <pageBody class="bg-dark">
      <div class="text-center">
        <div class="text-center" style="margin-top: 70px">
          <div class="col-2"></div>

          <div class="col-8">
            <h4 class="homePageText text-white">Dnevne sobe</h4>

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
import { useStoreDnevneSobe } from "../../stores/storeDnevneSobe";
import { useStoreVisenamenskiNamestaj } from "../../stores/storeVisenamenskiNamestaj";
import selektovaniAmbijent from "../../components/saradnici/selektovaniAmbijent.vue";

const storeDnevneSobe = useStoreDnevneSobe();
const storeVisenamenskiNamestaj = useStoreVisenamenskiNamestaj();

const ambijenti = ref([
  {
    imagePath: "/images/ambijenti/dnevne_sobe/",
    slika: "/images/ambijenti/dnevne_sobe.jpg",
    naziv: "dnevne sobe ambijenti",
    selektovano: storeDnevneSobe.dnevneSobe,
    imageExt: ".jpg",
  },
]);

const celineAmbijenta = ref([
  {
    imagePath: "/images/ugaone_garniture/",
    slika: "/icons/ugaona.png",
    naziv: "ugaone garniture",
    selektovano: storeDnevneSobe.ugaoneGarniture,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/tdf_garniture/",
    slika: "/icons/trosed-dvosed-fotelja.png",
    naziv: "tdf garniture",
    selektovano: storeDnevneSobe.tdfGarniture,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/fotelje_i_taburei/",
    slika: "/icons/fotelja.png",
    naziv: "fotelje i taburei",
    selektovano: storeDnevneSobe.foteljeItaburei,
    imageExt: ".jpg",
  },

  {
    imagePath: "/images/kaucevi/",
    slika: "/icons/kauc.png",
    naziv: "kaučevi",
    selektovano: storeDnevneSobe.kaucevi,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/lezajevi/",
    slika: "/icons/lezaj.png",
    naziv: "ležajevi",
    selektovano: storeVisenamenskiNamestaj.lezajevi,
    imageExt: ".jpg",
  },

  {
    imagePath: "/images/klub_stolovi/",
    slika: "/icons/klub-sto.png",
    naziv: "klub stolovi",
    selektovano: storeDnevneSobe.klubStolovi,
    imageExt: ".png",
  },

  {
    imagePath: "/images/visenamenski_namestaj/komode/",
    slika: "/icons/komoda.png",
    naziv: "komode",
    selektovano: storeVisenamenskiNamestaj.komode,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/tv_komode/",
    slika: "/icons/tv-stand.png",
    naziv: "tv-komode",
    selektovano: storeDnevneSobe.tvKomode,
    imageExt: ".jpg",
  },
]);
</script>

<style></style>
