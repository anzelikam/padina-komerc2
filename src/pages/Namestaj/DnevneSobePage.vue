<template>
  <q-page class="flex flex-center bg-positive">
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
import { useStoreDnevneSobe } from "../../stores/storeDnevneSobe";
import { useStoreVisenamenskiNamestaj } from "../../stores/storeVisenamenskiNamestaj";
import selektovaniAmbijent from "../../components/saradnici/selektovaniAmbijent.vue";

const storeDnevneSobe = useStoreDnevneSobe();
const storeVisenamenskiNamestaj = useStoreVisenamenskiNamestaj();
const nazivAmbijenta = ref("Dnevne sobe");

const ambijenti = ref([
  {
    imagePath: "/images/ambijenti/dnevne_sobe/",
    slika: "/images/ambijenti/dnevne_sobe.webp",
    naziv: "dnevne sobe ambijenti",
    selektovano: storeDnevneSobe.dnevneSobe,
    imageExt: ".webp",
  },
]);

const celineAmbijenta = ref([
  {
    imagePath: "/images/ugaone_garniture/",
    slika: "/icons/ugaona.png",
    naziv: "ugaone garniture",
    selektovano: storeDnevneSobe.ugaoneGarniture,
    imageExt: ".webp",
  },
  {
    imagePath: "/images/tdf_garniture/",
    slika: "/icons/trosed-dvosed-fotelja.png",
    naziv: "tdf garniture",
    selektovano: storeDnevneSobe.tdfGarniture,
    imageExt: ".webp",
  },
  {
    imagePath: "/images/fotelje_i_taburei/",
    slika: "/icons/fotelja.png",
    naziv: "fotelje i taburei",
    selektovano: storeDnevneSobe.foteljeItaburei,
    imageExt: ".webp",
  },

  {
    imagePath: "/images/kaucevi/",
    slika: "/icons/kauc.png",
    naziv: "kaučevi",
    selektovano: storeDnevneSobe.kaucevi,
    imageExt: ".webp",
  },
  {
    imagePath: "/images/lezajevi/",
    slika: "/icons/lezaj.png",
    naziv: "ležajevi",
    selektovano: storeVisenamenskiNamestaj.lezajevi,
    imageExt: ".webp",
  },

  {
    imagePath: "/images/klub_stolovi/",
    slika: "/icons/klub-sto.png",
    naziv: "klub stolovi",
    selektovano: storeDnevneSobe.klubStolovi,
    imageExt: ".webp",
  },

  {
    imagePath: "/images/visenamenski_namestaj/komode/",
    slika: "/icons/komoda.png",
    naziv: "komode",
    selektovano: storeVisenamenskiNamestaj.komode,
    imageExt: ".webp",
  },
  {
    imagePath: "/images/tv_komode/",
    slika: "/icons/tv-stand.png",
    naziv: "tv-komode",
    selektovano: storeDnevneSobe.tvKomode,
    imageExt: ".webp",
  },
]);
</script>

<style></style>
