<template>
  <pageHeader>
    <template #buttons-left> </template>
    <template #title>{{ grupaProizvoda.naziv }}</template>
  </pageHeader>

  <div style="margin-top: 80px">
    <breadCrumbs :prethodnaStranica="prethodnaStranica"></breadCrumbs>

    <h5 class="text-center text-white" style="text-transform: uppercase">
      {{ grupaProizvoda.naziv }}
    </h5>

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

            <div style="max-width: 500px; margin: 0 auto; padding: 10px">
              {{ grupaProizvoda.opis }}
            </div>
            <br />
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
</template>

<script setup>
import { ref } from "vue";
import selektovanaGrupaProizvoda from "../saradnici/selektovanaGrupaProizvoda.vue";
import { useStoreOstalo } from "../../stores/storeOstalo";

const showDetalje = ref(false);
const storeOstalo = useStoreOstalo();
const maximizedToggle = ref(true);
const grupaProizvoda = ref(storeOstalo.grupaProizvoda);
const prethodnaStranica = "Ostalo";

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
