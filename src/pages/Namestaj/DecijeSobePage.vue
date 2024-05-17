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
import { useStoreDecijeSobe } from "../../stores/storeDecijeSobe";
import { useStoreVisenamenskiNamestaj } from "../../stores/storeVisenamenskiNamestaj";
import selektovaniAmbijent from "../../components/saradnici/selektovaniAmbijent.vue";

const storeDecijeSobe = useStoreDecijeSobe();
const storeVisenamenskiNamestaj = useStoreVisenamenskiNamestaj();
const nazivAmbijenta = ref("Dečije sobe");

const ambijenti = ref([
  {
    imagePath: "/images/ambijenti/decije_sobe/",
    slika: "/images/ambijenti/decije_sobe.webp",
    naziv: "dečije sobe ambijenti",
    selektovano: storeDecijeSobe.decijeSobe,
    imageExt: ".webp",
  },
]);

const celineAmbijenta = ref([
  {
    imagePath: "/images/krevet_samac/",
    slika: "/icons/krevet-samac.png",
    naziv: "kreveti samci",
    selektovano: storeDecijeSobe.krevetiSamci,
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
    imagePath: "/images/ormari_plakari_garderoberi/decija/",
    slika: "/icons/nocni-ormaric.png",
    naziv: "garderoberi, komode, ormarići",
    selektovano: storeDecijeSobe.garderoberiKomodeNocniOrmarici,
    imageExt: ".webp",
  },
  {
    imagePath: "/images/radni_stolovi/deciji/",
    slika: "/icons/radni-sto.png",
    naziv: "radni stolovi",
    selektovano: storeDecijeSobe.radniStolovi,
    imageExt: ".webp",
  },
  {
    imagePath: "/images/radne_stolice/",
    slika: "/icons/radna-stolica.png",
    naziv: "radne stolice",
    selektovano: storeVisenamenskiNamestaj.radneStolice,
    imageExt: ".webp",
  },
]);
</script>
