<template>
  <pageHeader>
    <template #buttons-left>
      <!-- <mainHeader></mainHeader> -->
      <!-- <pageHeaderBtnBack label="Ostalo"></pageHeaderBtnBack> -->
      <!-- <q-btn icon="chevron_left" flat round dense v-close-popup /> -->
    </template>
    <template #title>{{ grupaProizvoda.naziv }}</template>
  </pageHeader>

  <div style="margin-top: 80px">
    <breadCrumbs :prethodnaStranica="prethodnaStranica"></breadCrumbs>

    <h4 class="text-center text-white">{{ grupaProizvoda.naziv }}</h4>

    <div class="row text-center">
      <div class="col-2"></div>
      <div
        class="col-lg-8 col-md-8 col-sm-12 col-xs-12 bg-secondary text-dark"
        style="min-height: 800px; max-width: 1400px"
      >
        <div class="row flex flex-center">
          <div class="text-center q-ma-lg col-12">
            {{ grupaProizvoda.opisGrupe }}
          </div>
          <div v-for="proizvod in grupaProizvoda.vrste" :key="proizvod.index">
            <img
              class="q-ma-md imageStyle"
              :src="
                grupaProizvoda.imgPath +
                proizvod.slikaVrstapath +
                proizvod.slikaVrsta
              "
              @click="handleShowDetalje(proizvod)"
            />
            <p class="text-center" style="font-size: 12px">
              {{ proizvod.naziv.toLocaleUpperCase() }}
            </p>

            <!-- rasveta, sudopere -->
            <div style="max-width: 500px; margin: 0 auto">
              {{ grupaProizvoda.opis }}
            </div>
            <br />
            <!-- <q-dialog
              v-model="showDetalje"
              :maximized="maximizedToggle"
              transition-show="slide-left"
              transition-hide="slide-right"
              animated
              transition-duration="400"
            >
              <selektovanaGrupaProizvoda
                :grupaProizvoda="grupaProizvoda"
                :proizvod="proizvod"
              ></selektovanaGrupaProizvoda>
            </q-dialog> -->
          </div>
        </div>
      </div>

      <div class="col-2"></div>
      <q-dialog
        v-model="showDetalje"
        :maximized="maximizedToggle"
        transition-show="slide-left"
        transition-hide="slide-right"
        animated
        transition-duration="400"
      >
        <selektovanaGrupaProizvoda
          :grupaProizvoda="grupaProizvoda"
        ></selektovanaGrupaProizvoda>
      </q-dialog>
    </div>
  </div>
  <br /><br />

  <!-- <div
    class="q-pa-md"
    v-for="proizvod in grupaProizvoda.vrste"
    :key="proizvod.index"
  >
    <div style="max-width: 600px">
      <q-tabs v-model="tab" align="justify" narrow-indicator class="q-mb-lg">
        <div class="row">
          <q-tab :name="proizvod.slikaVrsta" class="col"
            ><img
              class="q-ma-md text-white imageStyle"
              :src="
                grupaProizvoda.imgPath +
                proizvod.slikaVrstapath +
                proizvod.slikaVrsta
              "
          /></q-tab>
        </div>
      </q-tabs>
    </div>
  </div> -->
</template>

<script setup>
import { ref } from "vue";
import selektovanaGrupaProizvoda from "../saradnici/selektovanaGrupaProizvoda.vue";
import { useStoreOstalo } from "../../stores/storeOstalo";

const tab = ref("mails");
const splitterModel = ref(20);
const showDetalje = ref(false);
const storeOstalo = useStoreOstalo();
const maximizedToggle = ref(true);
const grupaProizvoda = ref(storeOstalo.grupaProizvoda);
const prethodnaStranica = "Ostalo";
const proizvod = ref(storeOstalo.proizvod);

// const props = defineProps({
//   grupaProizvoda: {
//     type: Object,
//   },
// });

function handleShowDetalje(proizvod) {
  if (proizvod.opis) {
    showDetalje.value = true;
  }
  console.log("proizvod", proizvod);
  console.log(grupaProizvoda.value.imgPath);
  storeOstalo.selectedProizvod(proizvod);
}
</script>
<style scoped>
.imageStyle {
  width: 280px;
  height: 250px;
}
/* ak je lem opis grupe proizvoda (rasveta), ni aj pojedinacniho proizvoda (podne i zidne obloge-laminat) */
.noProizvodOpisimageStyle {
  width: 380px;
  height: 340px;
}
@media only screen and (max-width: 600px) {
  .noProizvodOpisimageStyle {
    width: 330px;
    height: 300px;
  }
}
</style>
