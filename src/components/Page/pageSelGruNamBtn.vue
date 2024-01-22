<template>
  <q-fab
    padding="8px"
    color="accent"
    icon="category"
    direction="down"
    class="fixed-top-right"
    style="margin-right: 10px"
  >
    <q-fab-action
      round
      v-for="celina in celineAmbijenta"
      :key="celina.slika"
      color="primary"
      @click="
        selektovaniProizvodi(
          celina.selektovano,
          celina.imagePath,
          celina.naziv,
          celina.imageExt
        )
      "
      ><q-avatar size="25px"> <img :src="celina.slika" /> </q-avatar
    ></q-fab-action>
  </q-fab>
</template>

<script setup>
import { ref } from "vue";
import { useStorePodgrupaAmbijenta } from "../../stores/storePodgrupaAmbijenta";
import { useStoreDecijeSobe } from "../../stores/storeDecijeSobe";

const storePodgrupaAmbijenta = useStorePodgrupaAmbijenta();
const storeDecijeSobe = useStoreDecijeSobe();
const podgrupaAmbijenta = ref(storePodgrupaAmbijenta.podgrupaAmbijenta);

const celineAmbijenta = ref([
  {
    imagePath: "/images/krevet_samac/",
    slika: "/icons/krevet-samac.png",
    naziv: "kreveti samci",
    selektovano: storeDecijeSobe.krevetiSamci,
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
]);

function selektovaniProizvodi(selected, image, name, ext) {
  console.log("selected", selected);
  console.log("image", image);
  podgrupaAmbijenta.value.showPodgrupu = true;
  podgrupaAmbijenta.value.podgrupe = selected;
  podgrupaAmbijenta.value.imagePath = image;
  podgrupaAmbijenta.value.naziv = name;
  podgrupaAmbijenta.value.imageExtension = ext;
}
</script>
