<template>
  <q-header class="bg-grey-2">
    <q-toolbar style="height: 60px">
      <q-tabs
        no-caps
        active-color="accent"
        indicator-color="transparent"
        class="text-grey-8"
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
      <q-toolbar-title>
        <router-link to="/home" style="text-decoration: none">
          <div class="row items-end">
            <img src="logo/logo-padinakomerc.png" style="width: 50px" />
            <span
              class="text-h5 text-bold text-accent q-ml-sm"
              v-if="$route.path !== '/home'"
            >
              Padina Komerc
            </span>
          </div>
        </router-link>
      </q-toolbar-title>

      <q-toolbar class="flex flex-center list-menu" style="max-width: 550px">
        <div class="flex flex-center">
          <q-tabs
            no-caps
            active-color="accent"
            indicator-color="transparent"
            class="text-grey-8"
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
      <router-link to="/omiljeno" style="text-decoration: none">
        <q-btn
          flat
          style="margin-right: 39px"
          v-if="storeOmiljeno.omiljeniProizvodi.length"
          round
          text-color="dark"
          color="white"
          icon="las la-heart"
        />
      </router-link>

      <!-- <q-btn
        flat
        style="margin-right: 39px"
        v-if="storeOmiljeno.omiljeniProizvodi.length"
        round
        text-color="dark"
        color="white"
        icon="las la-heart"
        @click="showFavorite = true"
      /> -->

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
          ><q-tooltip
            class="bg-grey-7 text-white text-caption"
            anchor="center left"
            self="center end"
            >{{ celina.naziv }}
          </q-tooltip></q-fab-action
        >
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
import { ref } from "vue";
import { useStoreNavigacija } from "../../stores/storeNavigacija";
import { useStoreOmiljeno } from "../../stores/storeOmiljeno";
import { useStorePodgrupaAmbijenta } from "../../stores/storePodgrupaAmbijenta";
import { useStoreDecijeSobe } from "../../stores/storeDecijeSobe";
import { useStoreKuhinje } from "../../stores/storeKuhinje";
import { useStoreVisenamenskiNamestaj } from "src/stores/storeVisenamenskiNamestaj";
import { useStoreDnevneSobe } from "src/stores/storeDnevneSobe";
import { useStoreSpavaceSobe } from "src/stores/storeSpavaceSobe ";
import { useStoreKancelarije } from "../../stores/storeKancelarije";
import { useStorePredsoblja } from "../../stores/storePredsoblja";
import selektovanaGrupaNamestaja from "../../components/saradnici/selektovanaGrupaNamestaja.vue";
import omiljeno from "../../pages/omiljenoPage.vue";

const storePodgrupaAmbijenta = useStorePodgrupaAmbijenta();
const storeDecijeSobe = useStoreDecijeSobe();
const storeKuhinje = useStoreKuhinje();
const storeVisenamenskiNamestaj = useStoreVisenamenskiNamestaj();
const storeDnevneSobe = useStoreDnevneSobe();
const storeSpavaceSobe = useStoreSpavaceSobe();
const storeKancelarije = useStoreKancelarije();
const podgrupaAmbijenta = ref(storePodgrupaAmbijenta.podgrupaAmbijenta);
const storePredsoblja = useStorePredsoblja();
const navigacija = useStoreNavigacija();
const storeOmiljeno = useStoreOmiljeno();
const maximizedToggle = ref(true);
const showFavorite = ref(false);
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
    imagePath: "/images/komode/",
    slika: "/icons/komoda.png",
    naziv: "komode",
    selektovano: storeVisenamenskiNamestaj.komode,
    imageExt: ".jpg",
  },
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
    imagePath: "/images/klub_stolovi/",
    slika: "/icons/klub-sto.png",
    naziv: "klub stolovi",
    selektovano: storeDnevneSobe.klubStolovi,
    imageExt: ".jpg",
  },

  {
    imagePath: "/images/francuski_lezajevi/",
    slika: "/icons/francuski-lezaj.png",
    naziv: "francuski ležajevi",
    selektovano: storeSpavaceSobe.francuskiLezajevi,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/ormari_plakari_garderoberi/spavaca/",
    slika: "/icons/plakari.png",
    naziv: "ormari, plakari i garderoberi",
    selektovano: storeSpavaceSobe.ormariPlakariGarderoberi,
    imageExt: ".jpg",
  },

  {
    imagePath: "/images/leonidas/",
    slika: "/icons/kancelarijski-sto.png",
    naziv: "leonidas program",
    selektovano: storeKancelarije.leonidas,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/radni_stolovi/office/",
    slika: "/icons/radni-sto.png",
    naziv: "radni stolovi",
    selektovano: storeKancelarije.radniStolovi,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/radne_stolice/",
    slika: "/icons/radna-stolica.png",
    naziv: "radne stolice",
    selektovano: storeVisenamenskiNamestaj.radneStolice,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/cipelari/",
    slika: "/icons/cipelarnik.png",
    naziv: "cipelarnici",
    selektovano: storePredsoblja.cipelari,
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
<style>
.burger-menu {
  display: none;
}

@media screen and (max-width: 800px) {
  .burger-menu {
    display: block;
  }
  .list-menu {
    display: none;
  }
}
</style>
