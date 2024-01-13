<template>
  <q-page>
    <pageHeader>
      <template #buttons-left>
        <q-btn
          icon="chevron_left"
          flat
          rounded
          dense
          no-caps
          color="primary"
          v-close-popup
        />
      </template>

      <template #title>
        <span class="title">{{ podgrupaAmbijentaNaziv }} </span>
      </template>
    </pageHeader>
    <pageBody class="bg-dark">
      <div style="max-width: 1400px; margin: 0 auto">
        <div class="text-white q-mt-md q-mb-md q-pa-md">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            voluptatem laudantium reprehenderit eum illum deserunt cumque maxime
            ipsam, quo quae distinctio a delectus beatae, sed voluptas
            aspernatur doloremque praesentium dignissimos?
          </p>
          <br />

          <q-tabs
            v-model="proizvodjac"
            narrow-indicator
            indicator-color="transparent"
            ><div class="row items-center" style="max-width: 550px">
              <div
                v-for="saradnik in filteredSaradnici"
                :key="saradnik.proizvodjac"
                class="q-ma-sm"
                :class="filteredSaradnici.length < 6 ? 'col' : 'col-2'"
              >
                <q-tab
                  :name="saradnik.proizvodjac"
                  class="saradnikButton justify-center"
                  :class="
                    saradnik.proizvodjac === proizvodjac
                      ? 'bg-' + saradnik.boja
                      : ''
                  "
                  ><q-btn
                    unelevated
                    round
                    :text-color="
                      saradnik.proizvodjac === proizvodjac
                        ? 'white'
                        : saradnik.boja
                    "
                    :color="saradnik.boja"
                    icon="las la-check"
                /></q-tab>
              </div>
              <div class="col">
                <q-btn
                  class="q-ml-sm"
                  v-if="storeOmiljeno.omiljeniProizvodi.length"
                  round
                  text-color="dark"
                  color="white"
                  icon="las la-heart"
                  @click="showFavorite = true"
                />
              </div>
            </div>
          </q-tabs>
        </div>

        <q-tab-panels
          v-model="proizvodjac"
          class="bg-secondary text-center"
          animated
          transition-next="slide-up"
          transition-prev="slide-up"
          transition-duration="400"
        >
          <q-tab-panel
            v-for="proizvod in proizvodi"
            :key="proizvod.proizvodjac"
            :name="proizvod.proizvodjac"
          >
            <div class="text-left">
              <div
                v-for="saradnik in filteredSaradnici"
                :key="saradnik.proizvodjac"
              >
                <div v-show="saradnik.proizvodjac === proizvod.proizvodjac">
                  <img
                    :src="saradnik.logo"
                    style="width: 120px"
                    class="q-mr-md q-mb-lg"
                  />
                </div>
              </div>

              <p>Proizvodjač: {{ proizvod.proizvodjac.toUpperCase() }}</p>

              <div v-for="saradnik in filteredSaradnici" :key="saradnik.logo">
                <a
                  v-if="proizvod.proizvodjac === saradnik.proizvodjac"
                  :href="saradnik.link"
                  target="_blank"
                >
                  Posetite stranicu proizvodjača
                </a>
              </div>
            </div>

            <div class="row justify-center">
              <div
                v-for="proizvod in filteredProizvodi"
                :key="proizvod.proizvodjac"
              >
                <img
                  class="q-ma-md podgrupaAmbijenta"
                  style="height: 200px; max-width: 300px; cursor: pointer"
                  :src="
                    podgrupaAmbijentaImagePath +
                    proizvod.proizvodjac +
                    '/' +
                    proizvod.img +
                    imageExt
                  "
                  @click="
                    detaljiAmbijenta(proizvod, podgrupaAmbijentaImagePath)
                  "
                />

                <p>
                  <span style="text-transform: capitalize">{{
                    proizvod.naziv
                  }}</span>

                  <q-btn
                    flat
                    round
                    :class="proizvod.favorite ? 'favorite' : 'notFavorite'"
                    icon="favorite"
                    @click="
                      addToFavorite(
                        proizvod,
                        podgrupaAmbijentaImagePath,
                        podgrupaAmbijentaNaziv,
                        imageExt
                      )
                    "
                  />
                </p>
                <div>{{ proizvod.boja }}</div>
              </div>
            </div>

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

              <!-- <div>{{ storeOmiljeno.omiljeniProizvodi }}</div> -->
            </q-dialog>
          </q-tab-panel>
        </q-tab-panels>
      </div>

      <q-dialog
        persistent
        style="background: rgba(9, 29, 52, 0.8)"
        v-model="showDetaljeAmbijenta"
        transition-duration="400"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <!-- <q-card-section class="row text-center q-pb-none">
          <q-btn icon="close" flat round dense v-close-popup color="white" />
        </q-card-section> -->

        <!-- <div class="text-h6 text-center">
          <q-btn icon="close" flat round dense v-close-popup />
        </div> -->

        <div style="width: 1000px; max-width: 100%" class="text-center">
          <q-btn
            color="white"
            icon="close"
            flat
            round
            dense
            v-close-popup
            class="q-mb-lg"
          />
          <q-carousel
            animated
            swipeable
            transition-next="slide-left"
            transition-prev="slide-right"
            transition-duration="300"
            v-model="slide"
            :arrows="multipleImagesInCarousel"
            :navigation="multipleImagesInCarousel"
            infinite
            style="min-height: 600px"
          >
            <q-carousel-slide
              style="aspect-ratio: 16/9"
              v-for="image in selektovaniAmbijent.images"
              :key="image.index"
              :name="image"
              :img-src="image"
            >
            </q-carousel-slide>
          </q-carousel>
        </div>
      </q-dialog>
      <q-dialog
        style="background: rgba(9, 29, 52, 0.8)"
        transition-duration="400"
        v-model="showSingleLargeImage"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card style="width: 860px; max-width: 100%">
          <q-img :src="largeImage" style="width: 100%" />
        </q-card>
      </q-dialog>
    </pageBody>
  </q-page>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import { useStoreSaradnici } from "../../stores/storeSaradnici";
import { useStoreOmiljeno } from "../../stores/storeOmiljeno";
import { useStorePodgrupaAmbijenta } from "../../stores/storePodgrupaAmbijenta";
import { useQuasar } from "quasar";
import omiljeno from "../../pages/omiljenoPage.vue";

const storeSaradnici = useStoreSaradnici();
const storeOmiljeno = useStoreOmiljeno();
const storePodgrupaAmbijenta = useStorePodgrupaAmbijenta();
const $q = useQuasar();

const showDetaljeAmbijenta = ref(false);
const showSingleLargeImage = ref(false);
const showFavorite = ref(false);

// const showDodatoUomiljeno = ref(false);

const selektovaniAmbijent = ref({});
const slide = ref("");
const multipleImagesInCarousel = ref(true);

const largeImage = ref("");

const maximizedToggle = ref(true);

const props = defineProps({
  ambijenti: {
    type: Array,
  },
  proizvodi: {
    type: Array,
  },
  podgrupaAmbijentaImagePath: {
    type: String,
  },

  podgrupaAmbijentaNaziv: {
    type: String,
  },
  imageExt: {
    type: String,
  },
});

const handleProizvodjaca = computed(() => {
  // console.log("proizvodi", props.proizvodi);
  const pr = [];
  props.proizvodi.forEach((proizvod) => {
    pr.push(proizvod.proizvodjac);
  });
  // console.log("pr", pr);
  const proizvodjaci = [...new Set(pr)];
  // console.log("proizvodjaci", proizvodjaci);

  return proizvodjaci;
});

const filteredSaradnici = computed(() => {
  return storeSaradnici.saradniciData.filter((saradnik) => {
    return handleProizvodjaca.value.includes(saradnik.proizvodjac);
  });
});

const proizvodjac = ref(filteredSaradnici.value[0].proizvodjac);

const filteredProizvodi = computed(() => {
  return props.proizvodi.filter((proizvod) => {
    // console.log("filter", proizvod.proizvodjac, proizvodjac.value);
    return proizvod.proizvodjac === proizvodjac.value;
  });
});

function detaljiAmbijenta(proizvod, podgrupaAmbijentaImagePath) {
  if (proizvod.images) {
    selektovaniAmbijent.value = proizvod;
    slide.value = proizvod.images[0];
    // console.log("slide1", slide.value);
    showDetaljeAmbijenta.value = true;
    if (proizvod.images.length === 1) {
      multipleImagesInCarousel.value = false;
    }
  } else {
    // console.log("podgrupaAmbijentaImagePath", podgrupaAmbijentaImagePath);

    largeImage.value =
      podgrupaAmbijentaImagePath +
      proizvod.proizvodjac +
      "/" +
      proizvod.img +
      props.imageExt;
    showSingleLargeImage.value = true;
  }
  // console.log("PROIZVOD", proizvod);
}

function addToFavorite(
  omiljeniProizvod,
  podgrupaAmbijentaImagePath,
  podgrupaAmbijentaNaziv,
  imageExt
) {
  storeOmiljeno.addOmiljeniProizvod(
    omiljeniProizvod,
    podgrupaAmbijentaImagePath,
    podgrupaAmbijentaNaziv,
    imageExt
  );

  $q.notify({
    color: "red-10",
    message: "Dodato u omiljeno...",
    icon: "done",
    timeout: 3000,
    position: "bottom",
  });
}
</script>

<style>
@media screen and (max-width: 600px) {
  .proizvodjacLogo {
    width: auto;
    border: 1px solid black;
    display: none;
  }
}
.favorite {
  color: #ea202c;
}

.notFavorite {
  color: #0c386a;
}

/* .active {
  background: #0c386a;
  border: 1px solid #0c386a;
  border-radius: 5px;
  margin: 5px;
} */
.active {
  background: white;
  border: 1px solid white;
  border-radius: 50%;
}

.title {
  text-transform: capitalize;
}
.homePageContainer {
  width: 400px;
  height: 550px;
  border-bottom: 1px solid grey;
}
.podgrupaAmbijenta {
  border: 1px solid inherit;
  border-radius: 5px;
}
.podgrupaAmbijenta:hover {
  opacity: 0.6;
}
.saradnikButton {
  width: 58px;
  height: 58px;
  border: 1px solid inherit;
  border-radius: 50%;
}
</style>
