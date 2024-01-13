<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header class="bg-primary q-pb-md absolute-top">
      <q-toolbar class="text-center">
        <q-toolbar-title>
          <router-link to="/">
            <img src="logo/logo-padinakomerc.png" class="q-mb-sm" />
          </router-link>
        </q-toolbar-title>

        <q-toolbar-title class="toggleNavButtons">
          <div>
            <q-btn
              :ripple="false"
              flat
              :class="$route.path === '/namestaj' ? 'active' : 'nonActive'"
              label="Ambijenti"
              to="/namestaj"
            />
          
            <q-btn
              :ripple="false"
              flat
              :class="
                $route.path === '/namestaj-po-meri' ? 'active' : 'nonActive'
              "
              label="Nameštaj po meri"
              to="/namestaj-po-meri"
            />
            <q-btn
              :ripple="false"
              flat
              :class="$route.path === '/o-nama' ? 'active' : 'nonActive'"
              label="O nama"
              to="/o-nama"
            />
            <q-btn
              v-if="storeOmiljeno.omiljeniProizvodi.length"
              label="omiljeno"
              bordered
              outline
              color="secondary"
              icon="favorite"
              to="/omiljeno"
            />
          </div>
        </q-toolbar-title>

        <q-toolbar-title class="toggleMenuButton">
          <q-btn
            class="text-black"
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
        </q-toolbar-title>
      </q-toolbar>
      
      <q-bar class="flex flex-center bg-primary">
        
        <div v-for="celina in celineAmbijenta" :key="celina.slika">
          <q-avatar class="q-ma-md">
            <img
              :src="celina.slika"
              style="cursor: pointer"
              @click="
                selektovaniProizvodi(
                  celina.selektovano,
                  celina.imagePath,
                  celina.naziv,
                  celina.imageExt
                )
              "
            />
            
          </q-avatar>
        
        </div>
      </q-bar>
    </q-header> -->

    <!-- <q-drawer v-model="leftDrawerOpen" bordered :width="200" :breakpoint="2000">
      <q-btn
        :ripple="false"
        flat
        :class="
          $route.path === '/namestaj' ? 'activeDrawer' : 'nonActiveDrawer'
        "
        class="q-mt-md"
        label="Nameštaj"
        to="/namestaj"
      />
      <q-btn
        :ripple="false"
        flat
        :class="
          $route.path === '/namestaj-po-meri'
            ? 'activeDrawer'
            : 'nonActiveDrawer'
        "
        class="q-mt-md"
        label="Nameštaj po meri"
        to="/namestaj-po-meri"
      />
      <q-btn
        :ripple="false"
        flat
        :class="$route.path === '/o-nama' ? 'activeDrawer' : 'nonActiveDrawer'"
        class="q-mt-md"
        label="O nama"
        to="/o-nama"
      />
      <div>
        <q-btn
          v-if="storeOmiljeno.omiljeniProizvodi.length"
          label="omiljeno"
          flat
          color="grey"
          icon="favorite"
          to="/omiljeno"
        />
      </div>
    </q-drawer> -->

    <!-- omiljeno -->
    <!-- <q-drawer
      v-model="rightDrawerOpen"
      bordered
      side="right"
      :width="200"
      :breakpoint="2000"
    >
      <div
        v-for="proizvod in storeOmiljeno.omiljeniProizvodi"
        :key="proizvod.img"
      >
        <img
          class="q-ma-md"
          style="height: 80px; max-width: 200px"
          :src="
            proizvod.imagePath +
            proizvod.proizvodjac +
            '/' +
            proizvod.img +
            '.png'
          "
        />
        {{ proizvod.naziv }} {{ proizvod.imagePath }}
      </div>
      <q-btn @click="handleShowFavorite()">omiljeno</q-btn>
    </q-drawer> -->
    <q-dialog
      v-model="showFavorite"
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <!-- <div class="bg-grey-12" v-if="storeOmiljeno.omiljeniProizvodi.length">
        <omiljeniProizvodi
          @closeOmiljeno="handleHideFavorite"
        ></omiljeniProizvodi>
      </div> -->
    </q-dialog>

    <q-dialog v-model="showPodgrupaAmbijenta" :maximized="maximizedToggle">
      <div class="bg-positive">
        <selektovanaGrupaNamestaja
          :proizvodi="podgrupaAmbijenta"
          :podgrupaAmbijentaImagePath="podgrupaAmbijentaImagePath"
          :podgrupaAmbijentaNaziv="podgrupaAmbijentaNaziv"
          :imageExt="podgrupaAmbijentaImageExtension"
        ></selektovanaGrupaNamestaja>
      </div>
    </q-dialog>
    <q-page-container>
      <router-view />
      <!-- <transition
        appear
        enter-active-class="slideInRight"
        leave-active-class="slideOutRight"
      >
        <router-view />
      </transition> -->
    </q-page-container>

    <q-footer
      bordered
      class="bg-grey-3 text-primary"
      v-if="$route.path !== '/home'"
    >
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey-8"
      >
        <q-route-tab
          v-for="navItem in navigacija.navItems"
          :key="navItem.root"
          :to="navItem.to"
          :icon="navItem.icon"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useStoreOmiljeno } from "../stores/storeOmiljeno";
import { useStoreNavigacija } from "../stores/storeNavigacija";
import { useStorePodgrupaAmbijenta } from "../stores/storePodgrupaAmbijenta";
import { useStoreKuhinje } from "../stores/storeKuhinje";
import { useStoreVisenamenskiNamestaj } from "../stores/storeVisenamenskiNamestaj";
import selektovanaGrupaNamestaja from "../components/saradnici/selektovanaGrupaNamestaja.vue";
// import omiljeniProizvodi from "../components/saradnici/omiljeniProizvodi.vue";

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);
const storeOmiljeno = useStoreOmiljeno();
const navigacija = useStoreNavigacija();
const storePodgrupaAmbijenta = useStorePodgrupaAmbijenta();
const storeKuhinje = useStoreKuhinje();
const storeVisenamenskiNamestaj = useStoreVisenamenskiNamestaj();
const showFavorite = ref(false);
const showPodgrupaAmbijenta = ref(false);
const podgrupaAmbijenta = ref(storePodgrupaAmbijenta.podgrupaAmbijenta);
const podgrupaAmbijentaImagePath = ref(
  storePodgrupaAmbijenta.podgrupaAmbijentaImagePath
);
const podgrupaAmbijentaImageExtension = ref(
  storePodgrupaAmbijenta.podgrupaAmbijentaImageExtension
);
const podgrupaAmbijentaNaziv = ref(
  storePodgrupaAmbijenta.podgrupaAmbijentaNaziv
);
const maximizedToggle = ref(true);

function selektovaniProizvodi(selected, image, name, ext) {
  console.log("selected", selected);
  console.log("image", image);
  showPodgrupaAmbijenta.value = true;
  podgrupaAmbijenta.value = selected;
  podgrupaAmbijentaImagePath.value = image;
  podgrupaAmbijentaNaziv.value = name;
  podgrupaAmbijentaImageExtension.value = ext;
}

const celineAmbijenta = ref([
  {
    imagePath: "/images/trpezarijski_stolovi/",
    slika: "/images/trpezarijski_stolovi/mita/11.png",
    naziv: "trpezarijski stolovi",
    selektovano: storeKuhinje.trpezarijskiStolovi,
    imageExt: ".png",
    icon: "favorite",
  },
  {
    imagePath: "/images/trpezarijske_stolice/",
    slika: "/images/trpezarijske_stolice/mita/05.png",
    naziv: "trpezarijske stolice",
    selektovano: storeKuhinje.trpezarijskeStolice,
    imageExt: ".png",
    icon: "favorite",
  },
  {
    imagePath: "/images/visenamenski_namestaj/vitrine/",
    slika: "/images/visenamenski_namestaj/vitrine/jela/14.png",
    naziv: "vitrine",
    selektovano: storeVisenamenskiNamestaj.vitrine,
    imageExt: ".png",
    icon: "favorite",
  },
  {
    imagePath: "/images/visenamenski_namestaj/komode/",
    slika: "/images/visenamenski_namestaj/komode/jela/01.png",
    naziv: "komode",
    selektovano: storeVisenamenskiNamestaj.komode,
    imageExt: ".png",
    icon: "favorite",
  },
]);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}

function handleShowFavorite() {
  showFavorite.value = true;
}

function handleHideFavorite() {
  showFavorite.value = false;
}

storeOmiljeno.getOmiljeniProizvodiFromLocalS();
</script>

<style scoped>
.nonActive {
  color: #f0f7d4;
}
.active {
  color: #f4d52a;
}

.nonActiveDrawer {
  color: grey;
}
.activeDrawer {
  color: #ea202c;
}

.toggleMenuButton {
  float: right;
  display: block;
}
.toggleNavButtons {
  display: none;
}

@media screen and (min-width: 790px) {
  .toggleMenuButton {
    display: none;
  }
  .toggleNavButtons {
    display: block;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
<!-- :label="navItem.label" -->
