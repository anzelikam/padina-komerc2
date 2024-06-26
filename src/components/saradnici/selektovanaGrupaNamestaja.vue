<template>
  <page>
    <pageHeader>
      <template #buttons-left> </template>
    </pageHeader>

    <pageBody class="bg-dark">
      <breadCrumbs :prethodnaStranica="prethodnaStranica"></breadCrumbs>
      <div style="max-width: 1400px; margin: 0 auto">
        <div class="text-white">
          <p class="text-h6 q-mt-sm q-pl-md">
            {{ podgrupaAmbijentaNaziv.toUpperCase() }}
          </p>
          <p class="q-pa-md">
            Tapacirani nameštaj se proizvodi u različitim bojama, dezenima i
            dimenzijama. Sav ostali nameštaj takođe ima u raznim varijacijam
            boja i veličinama, a elementi, naročito kuhinjski, mogu lako da se
            kombinuju prema vašim potrebama. Da bi odabrali proizvod koji
            najviše odgovara vašem ukusu, najbolje je da nas posetite lično u
            salonu.
          </p>

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
                  class="saradnikButton justify-center q-mb-xs"
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
                    class="q-mr-md q-mt-sm"
                  />

                  <div
                    style="height: 2px; width: 100%"
                    :class="'bg-' + saradnik.boja"
                    class="q-mb-lg"
                  ></div>
                </div>
              </div>

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
                    icon="favorite_border"
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
          </q-tab-panel>
        </q-tab-panels>
      </div>

      <q-dialog
        style="background: rgba(9, 29, 52, 0.8)"
        v-model="showDetaljeAmbijenta"
        transition-duration="400"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <div style="width: 1000px; max-width: 100%" class="text-center">
          <!-- <q-btn
            color="white"
            icon="close"
            flat
            round
            dense
            v-close-popup
            class="q-mb-lg"
          /> -->
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
              ambijenti
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
  </page>
</template>
<script setup>
import { ref, computed } from "vue";
import { useStoreSaradnici } from "../../stores/storeSaradnici";
import { useStoreOmiljeno } from "../../stores/storeOmiljeno";
import { useStoreNavigacija } from "../../stores/storeNavigacija";
import { useQuasar } from "quasar";

import { onUnmounted } from "vue";

const storeSaradnici = useStoreSaradnici();
const storeOmiljeno = useStoreOmiljeno();
const navigacija = useStoreNavigacija();
const $q = useQuasar();

const showDetaljeAmbijenta = ref(false);
const showSingleLargeImage = ref(false);

const selektovaniAmbijent = ref({});
const slide = ref("");
const multipleImagesInCarousel = ref(true);

const largeImage = ref("");

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
  prethodnaStranica: {
    type: String,
  },
});

const handleProizvodjaca = computed(() => {
  const pr = [];
  props.proizvodi.forEach((proizvod) => {
    pr.push(proizvod.proizvodjac);
  });

  const proizvodjaci = [...new Set(pr)];

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
    return proizvod.proizvodjac === proizvodjac.value;
  });
});

function detaljiAmbijenta(proizvod, podgrupaAmbijentaImagePath) {
  if (proizvod.images) {
    selektovaniAmbijent.value = proizvod;
    slide.value = proizvod.images[0];

    showDetaljeAmbijenta.value = true;
    if (proizvod.images.length === 1) {
      multipleImagesInCarousel.value = false;
    }
  } else {
    largeImage.value =
      podgrupaAmbijentaImagePath +
      proizvod.proizvodjac +
      "/" +
      proizvod.img +
      props.imageExt;
    showSingleLargeImage.value = true;
  }
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

onUnmounted(() => {
  navigacija.visible = true;
});
</script>

<style scoped>
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
