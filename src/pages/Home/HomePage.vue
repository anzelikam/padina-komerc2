<template>
  <page>
    <q-header class="bg-white" style="height: 70px">
      <q-toolbar
        class="flex flex-center"
        style="max-width: 1600px; margin: 0 auto"
      >
        <q-toolbar-title>
          <img src="logo/logo-padinakomerc.png" style="width: 130px"
        /></q-toolbar-title>

        <div class="flex flex-center">
          <q-tabs
            no-caps
            active-color="accent"
            indicator-color="transparent"
            class="text-grey-8 q-mt-sm"
          >
            <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
            <q-btn-dropdown flat round dense icon="menu" class="q-mr-sm">
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-route-tab
              v-for="navItem in navigacija.navItems"
              :key="navItem.root"
              :to="navItem.to"
              :label="navItem.label"
            />
          </q-tabs>
        </div>
      </q-toolbar>
    </q-header>

    <pageBody class="wallpaper">
      <div
        style="
          background-color: rgba(255, 255, 255, 0.5);
          max-width: 1600px;
          margin: 0 auto;
        "
      >
        <div
          class="text-center header q-pa-sm"
          style="font-family: Arial, sans-serif"
        >
          <div class="text-h2 text-bold text-accent">Padina</div>
          <div class="text-h2 text-bold text-dark">Komerc</div>
          <div class="text-h5 text-dark">
            ...zajedno stvaramo dom Vaših snova
          </div>
        </div>
      </div>
      <!-- <q-btn
          to="/home"
          label="Home"
          icon="chevron_left"
          color="primary"
          flat
          rounded
          dense
          no-caps
        ></q-btn> -->

      <!-- <q-btn
          to="home/child"
          label="Go To Child Page"
          color="primary"
          class="full-width q-mb-md"
          rounded
          unelevated
          no-caps
        ></q-btn> -->

      <div style="margin-top: 100px; margin-bottom: 250px">
        <div class="flex flex-center">
          <div
            class="homePageContainer bg-dark"
            style="border-right: 1px solid grey"
          >
            <router-link to="/namestaj-po-meri" style="text-decoration: none">
              <h4 class="text-center text-positive text-bold">
                Naši proizvodi
              </h4>
              <div class="row q-ml-md q-mr-md" style="height: 120px">
                <img src="images/home/nasiProizvodi/01.jpg" class="col" />
                <img src="images/home/nasiProizvodi/03.jpg" class="col" />
                <img src="images/home/nasiProizvodi/06.jpg" class="col" />
                <img src="images/home/nasiProizvodi/05.jpg" class="col" />
              </div>
              <div class="row q-ml-md q-mr-md" style="height: 120px">
                <img src="images/home/nasiProizvodi/07.jpg" class="col" />
                <img src="images/home/nasiProizvodi/08.jpg" class="col" />
                <img src="images/home/nasiProizvodi/02.jpg" class="col" />
                <img src="images/home/nasiProizvodi/10.jpg" class="col" />
              </div>
            </router-link>
          </div>
          <div
            class="homePageContainer bg-dark"
            style="border-right: 1px solid grey"
          >
            <router-link to="/namestaj" style="text-decoration: none">
              <h4 class="text-center text-positive text-bold">Nameštaj</h4>
              <div
                class="proizvodjaci_saradnici flex flex-center"
                style="max-width: 400px; margin: 0 auto"
              >
                <div
                  v-for="saradnik in storeSaradnici.saradniciData"
                  :key="saradnik.logo"
                >
                  <img
                    :src="saradnik.logo"
                    style="width: 90px"
                    class="q-mr-md q-mb-lg"
                  />
                </div>
              </div>
            </router-link>
          </div>

          <div
            class="homePageContainer bg-dark"
            style="border-right: 1px solid grey"
          >
            <h4 class="text-center text-positive text-bold">O nama</h4>

            <div class="text-center">
              <!-- <i class="fa text-h1 text-secondary fa-home"></i> -->
              <p class="text-positive text-center q-ma-xl text-subtitle1">
                PADINA KOMERC je salon nameštaja, a ujedno i porodična firma.
                Nalazimo se Padini na udaljenosti oko 35km od Pančeva. Još od
                1990. kada je firma osnovana, svakim danom vam uspešno pomažemo
                u opremanju Vašeg životnog i radnog prostora.
              </p>
            </div>
          </div>

          <div class="homePageContainer bg-dark">
            <h4 class="text-center text-positive text-bold">Kontakt</h4>
            <div style="width: 80%; margin: 0 auto">
              <q-field class="bg-white">
                <template v-slot:control>
                  <div
                    class="self-center text-center full-width outline"
                    tabindex="0"
                  >
                    Lenjinova 18, 26215 PADINA
                  </div>
                </template>
              </q-field>
              <q-field class="bg-white">
                <template v-slot:control>
                  <div
                    class="self-center text-center full-width outline"
                    tabindex="0"
                  >
                    013 667-275
                  </div>
                </template>
              </q-field>
              <q-field class="bg-white">
                <template v-slot:control>
                  <div
                    class="self-center text-center full-width outline"
                    tabindex="0"
                  >
                    padinakomerc.namestaj@gmail.com
                  </div>
                </template>
              </q-field>
            </div>
          </div>
        </div>
      </div>
      <Footer
        style="padding-bottom: 20px; padding-top: 10px; margin-bottom: -100px"
      ></Footer>
    </pageBody>
  </page>
</template>

<script setup>
import { ref } from "vue";
import { useStoreSaradnici } from "../../stores/storeSaradnici";
import Footer from "../../components/cFooter.vue";
import { useStoreNavigacija } from "../../stores/storeNavigacija";

const navigacija = useStoreNavigacija();
const storeSaradnici = useStoreSaradnici();
</script>

<style>
.wallpaper {
  background-image: url("images/home/homeBackgroundImage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #cccccc;
}
.transbox {
  background-color: #ffffff;
  opacity: 0.6;
}
.header {
  margin-top: 100px;
  margin-bottom: 70px;
}
.logo_saradnici {
  background-color: rgb(227, 227, 236);
  width: 300px;
  height: 400px;
  border: 1px solid inherit;
  border-radius: 50px;
}

.homePageCont {
  width: 100%;
}

.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
.homePageContainer {
  width: 400px;
  height: 550px;
  border-bottom: 1px solid grey;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="homePageContainer"] {
    width: 100%;
  }
}
</style>
