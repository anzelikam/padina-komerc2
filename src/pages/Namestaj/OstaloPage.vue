<template>
  <q-page class="bg-positive">
    <pageHeader>
      <template #buttons-left>
        <mainHeader></mainHeader>
        <pageHeaderBtnBack label="Ambijenti"></pageHeaderBtnBack>
      </template>
      <template #title>Ostalo</template>
    </pageHeader>
    <pageBody class="bg-dark">
      <breadCrumbs></breadCrumbs>
      <div class="= row text-center">
        <div class="col-2"></div>

        <div class="col-8" style="max-width: 1600px">
          <h4 class="text-white">Ostalo</h4>

          <br />

          <div class="row justify-center">
            <div
              class="naziv text-white"
              v-for="grupaProizvoda in storeOstalo.grupeProizvoda"
              :key="grupaProizvoda.index"
              @click="selektovanaGrupaProizvoda(grupaProizvoda)"
            >
              <img
                class="q-ma-md text-white"
                style="height: 170px; max-width: 300px"
                :src="grupaProizvoda.slika"
              />
              <p>{{ grupaProizvoda.naziv }}</p>

              <q-dialog
                v-model="showGrupaProizvoda"
                :maximized="maximizedToggle"
                transition-show="slide-left"
                transition-hide="slide-right"
                animated
                transition-duration="500"
              >
                <div class="bg-dark">
                  <ostaleGrupeProizvoda></ostaleGrupeProizvoda>
                </div>
              </q-dialog>
            </div>
          </div>

          <br /><br />
        </div>

        <div class="col-2"></div>
      </div>
    </pageBody>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useStoreOstalo } from "../../stores/storeOstalo";
import ostaleGrupeProizvoda from "../../components/saradnici/ostaleGrupeProizvoda.vue";

const storeOstalo = useStoreOstalo();
const showGrupaProizvoda = ref(false);
const maximizedToggle = ref(true);

function selektovanaGrupaProizvoda(grupaProizvoda) {
  showGrupaProizvoda.value = true;
  storeOstalo.selectedGrupa(grupaProizvoda);
  // grupaProizvoda.value === proizvodi;
}
</script>

<style scoped>
.naziv {
  border: 1px solid #091d34;
  border-radius: 5px;
  text-transform: uppercase;
  text-decoration: none;
  margin: 2px;
}
.naziv:hover {
  border: 1px solid white;
}
.naziv_slika {
  border-radius: 5px;
}
</style>
