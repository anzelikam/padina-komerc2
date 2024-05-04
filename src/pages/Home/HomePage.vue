<template>
  <page>
    <mainHeader></mainHeader>

    <pageBody class="wallpaper">
      <div
        style="
          background-color: rgba(255, 255, 255, 0.6);
          max-width: 1200px;
          margin: 0 auto;
        "
      >
        <div class="text-center header q-pa-sm">
          <div class="text-accent">Padina Komerc</div>
          <div class="text-h6 text-dark">
            ...zajedno stvaramo dom Vaših snova
          </div>
        </div>
      </div>

      <div style="margin-top: 100px; margin-bottom: 250px">
        <div class="flex flex-center">
          <div
            class="homePageContainer bg-dark"
            style="border-right: 1px solid grey"
          >
            <router-link to="/namestaj-po-meri" style="text-decoration: none">
              <h4 class="text-center text-positive text-weight-medium">
                Naši proizvodi
              </h4>
              <div class="row q-ml-md q-mr-md" style="height: 240px">
                <img src="images/home/nasiProizvodi/kolaz.jpg" class="col" />
              </div>
              <!-- <h4 class="text-center text-positive text-weight-medium">
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
              </div> -->
            </router-link>
          </div>
          <div
            class="homePageContainer bg-dark"
            style="border-right: 1px solid grey"
          >
            <router-link to="/namestaj" style="text-decoration: none">
              <h4 class="text-center text-positive text-weight-medium">
                Nameštaj
              </h4>
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
            <router-link to="/o-nama" style="text-decoration: none">
              <h4 class="text-center text-positive text-weight-medium">
                O nama
              </h4>

              <div class="text-center">
                <p class="text-positive text-center q-ma-xl text-subtitle1">
                  PADINA KOMERC je salon nameštaja, a ujedno i porodična firma.
                  Nalazimo se Padini na udaljenosti oko 35km od Pančeva. Još od
                  1990. kada je firma osnovana, svakim danom vam uspešno
                  pomažemo u opremanju Vašeg životnog i radnog prostora.
                </p>
              </div>
            </router-link>
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
import { useStoreSaradnici } from "../../stores/storeSaradnici";
import Footer from "../../components/headerAndFooter/cFooter.vue";

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

.burger-menu {
  display: none;
}
.header {
  font-size: 50px;
  font-weight: 600;
}

@media screen and (max-width: 800px) {
  .burger-menu {
    display: block;
  }
  .list-menu {
    display: none;
  }
}
@media screen and (max-width: 900px) {
  .header {
    font-size: 44px;
    font-weight: 800;
  }
}
</style>
