<template>
  <q-header class="bg-grey-2">
    <q-toolbar style="height: 70px">
      <q-tabs
        no-caps
        active-color="accent"
        indicator-color="transparent"
        class="text-grey-8 q-mt-sm"
      >
        <q-btn flat round dense icon="menu" class="q-mr-sm burger-menu" />
        <q-menu>
          <q-list style="min-width: 80px">
            <q-route-tab
              v-for="navItem in navigacija.navItems"
              :key="navItem.root"
              :to="navItem.to"
              :label="navItem.label"
            />
          </q-list>
        </q-menu>
      </q-tabs>

      <img src="logo/logo-padinakomerc.png" style="width: 50px" />

      <q-toolbar-title>
        <div class="text-h5 text-bold text-dark">
          Padina Komerc
        </div></q-toolbar-title
      >
      <q-toolbar class="flex flex-center list-menu" style="max-width: 450px">
        <div class="flex flex-center">
          <q-tabs
            no-caps
            active-color="accent"
            indicator-color="transparent"
            class="text-grey-8 q-mt-sm"
          >
            <q-route-tab
              v-for="navItem in navigacija.navItems"
              :key="navItem.root"
              :to="navItem.to"
              :label="navItem.label"
            />
          </q-tabs>
        </div>
      </q-toolbar>

      <q-btn
        flat
        style="margin-right: 39px"
        v-if="storeOmiljeno.omiljeniProizvodi.length"
        round
        text-color="dark"
        color="white"
        icon="las la-heart"
        @click="showFavorite = true"
      />
      <q-fab
        padding="8px"
        color="accent"
        icon="category"
        direction="down"
        class="fixed-top-right"
        style="margin-right: 10px; margin-top: 15px"
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
    </q-toolbar>
  </q-header>
  <q-dialog
    v-model="podgrupaAmbijenta.showPodgrupu"
    :maximized="maximizedToggle"
    transition-duration="400"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <div class="bg-positive">
      <selektovanaGrupaNamestaja
        :proizvodi="podgrupaAmbijenta.podgrupe"
        :podgrupaAmbijentaImagePath="podgrupaAmbijenta.imagePath"
        :podgrupaAmbijentaNaziv="podgrupaAmbijenta.naziv"
        :imageExt="podgrupaAmbijenta.imageExtension"
      ></selektovanaGrupaNamestaja>
    </div>
  </q-dialog>
  <q-dialog
    persistent
    :maximized="maximizedToggle"
    v-model="showFavorite"
    transition-duration="400"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <div class="bg-dark" style="width: 100%">
      <omiljeno></omiljeno>
    </div>
  </q-dialog>
</template>

<script setup>
import { useStoreNavigacija } from "../../stores/storeNavigacija";
import { useStoreOmiljeno } from "../../stores/storeOmiljeno";
import { ref } from "vue";
import { useStorePodgrupaAmbijenta } from "../../stores/storePodgrupaAmbijenta";
import { useStoreDecijeSobe } from "../../stores/storeDecijeSobe";
import selektovanaGrupaNamestaja from "../../components/saradnici/selektovanaGrupaNamestaja.vue";
import omiljeno from "../../pages/omiljenoPage.vue";

const storePodgrupaAmbijenta = useStorePodgrupaAmbijenta();
const storeDecijeSobe = useStoreDecijeSobe();
const podgrupaAmbijenta = ref(storePodgrupaAmbijenta.podgrupaAmbijenta);
const navigacija = useStoreNavigacija();
const storeOmiljeno = useStoreOmiljeno();
const maximizedToggle = ref(true);
const showFavorite = ref(false);

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
  showFavorite.value = false;
  podgrupaAmbijenta.value.showPodgrupu = true;
  podgrupaAmbijenta.value.podgrupe = selected;
  podgrupaAmbijenta.value.imagePath = image;
  podgrupaAmbijenta.value.naziv = name;
  podgrupaAmbijenta.value.imageExtension = ext;
  // emit("openDialog");
}
</script>
