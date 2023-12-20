<template>
  <div class="flex flex-center">
    <div @click="hideFavorite()">X</div>
    <div><h4 class="text-dark">Omiljeno</h4></div>
  </div>

  <div style="max-width: 1000px; margin: 0 auto" class="row justify-center">
    <div
      v-for="(proizvod, index) in omiljeniProizvodi"
      :key="proizvod.img"
      class="text-center"
    >
      <img
        class="q-ma-md"
        style="height: 200px; max-width: 300px"
        :src="
          proizvod.imagePath +
          proizvod.proizvodjac +
          '/' +
          proizvod.img +
          '.png'
        "
      />

      <p>
        {{ proizvod.naziv }} {{ index }}
        <q-btn
          flat
          icon="close"
          class="text-accent"
          @click="deleteProizvod(index)"
        />
      </p>
    </div>
  </div>
</template>

<script setup>
import { useStoreOmiljeno } from "../../stores/storeOmiljeno";

const storeOmiljeno = useStoreOmiljeno();
const omiljeniProizvodi = storeOmiljeno.omiljeniProizvodi;

const emit = defineEmits(["closeOmiljeno"]);

function deleteProizvod(index) {
  storeOmiljeno.deleteOmiljeniProizvod(index);
}

function hideFavorite() {
  emit("closeOmiljeno");
}
</script>
