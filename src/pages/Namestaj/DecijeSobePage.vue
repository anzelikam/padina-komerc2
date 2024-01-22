<template>
  <q-page class="flex flex-center bg-positive">
    <pageHeader>
      <template #buttons-left>
        <mainHeader></mainHeader>
        <pageHeaderBtnBack label="Ambijenti"></pageHeaderBtnBack>
      </template>
      <template #title>Dečije sobe</template>
    </pageHeader>
    <pageBody class="bg-dark">
      <div class="text-center">
        <div class="text-center" style="margin-top: 70px">
          <div class="col-2"></div>

          <div class="col-8">
            <h4 class="homePageText text-white">Dečije sobe</h4>

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
import { useStoreDecijeSobe } from "../../stores/storeDecijeSobe";
import { useStoreVisenamenskiNamestaj } from "../../stores/storeVisenamenskiNamestaj";
import selektovaniAmbijent from "../../components/saradnici/selektovaniAmbijent.vue";

const storeDecijeSobe = useStoreDecijeSobe();
const storeVisenamenskiNamestaj = useStoreVisenamenskiNamestaj();

const ambijenti = ref([
  {
    imagePath: "/images/ambijenti/decije_sobe/",
    slika: "/images/ambijenti/decije_sobe.jpg",
    naziv: "dečije sobe ambijenti",
    selektovano: storeDecijeSobe.decijeSobe,
    imageExt: ".jpg",
  },
]);

const celineAmbijenta = ref([
  {
    imagePath: "/images/krevet_samac/",
    slika: "/icons/krevet-samac.png",
    naziv: "kreveti samci",
    selektovano: storeDecijeSobe.krevetiSamci,
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
    imagePath: "/images/ormari_plakari_garderoberi/decija/",
    slika: "/icons/nocni-ormaric.png",
    naziv: "garderoberi, komode, noćni ormarići",
    selektovano: storeDecijeSobe.garderoberiKomodeNocniOrmarici,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/radni_stolovi/deciji/",
    slika: "/icons/radni-sto.png",
    naziv: "radni stolovi",
    selektovano: storeDecijeSobe.radniStolovi,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/radne_stolice/",
    slika: "/icons/radna-stolica.png",
    naziv: "radne stolice",
    selektovano: storeVisenamenskiNamestaj.radneStolice,
    imageExt: ".jpg",
  },
]);
</script>
