<template>
  <pageHeader>
    <template #buttons-left> </template>
  </pageHeader>

  <pageBody class="bg-dark">
    <div style="max-width: 1400px; margin: 0 auto" class="bg-dark">
      <breadCrumbs :prethodnaStranica="grupaProizvoda.naziv"></breadCrumbs>

      <div
        class="bg-secondary"
        style="margin: 0 auto; min-height: 800px; max-width: 1400px"
      >
        <!-- <div class="text-center">{{ storeOstalo.proizvod.naziv }}</div> -->

        <div class="text-center">
          <img
            class="imageStyle q-mt-lg q-mb-lg"
            :src="
              grupaProizvoda.imgPath +
              storeOstalo.proizvod.slikaVrstapath +
              storeOstalo.proizvod.slikaVrsta
            "
          />
          <div style="max-width: 500px; margin: 0 auto">
            {{ storeOstalo.proizvod.opis }}
          </div>
        </div>
      </div>
    </div>
  </pageBody>
</template>

<script setup>
import { useStoreOstalo } from "../../stores/storeOstalo";

const storeOstalo = useStoreOstalo();
const props = defineProps({
  grupaProizvoda: {
    type: Object,
  },
});
</script>

<style scoped>
.imageStyle {
  width: 380px;
  height: 340px;
}
@media only screen and (max-width: 600px) {
  .imageStyle {
    width: 330px;
    height: 300px;
  }
}
</style>
