<template>
  <page>
    <!-- <pageHeader>
      <template #buttons-left>
        <mainHeader></mainHeader>
        <q-btn
          to="/home"
          icon="chevron_left"
          color="primary"
          label="Početna"
          flat
          rounded
          dense
          no-caps
        ></q-btn>
      </template>
    </pageHeader> -->
    <mainHeader></mainHeader>
    <pageBody class="bg-dark">
      <div class="row text-center">
        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <h4 class="text-white">Katalozi</h4>

          <div v-if="katalozi && katalozi.length" class="row">
            <div
              v-for="katalog in katalozi"
              :key="katalog.src"
              style="max-width: 1300px; margin: 0 auto"
            >
              <a :href="katalog.pdfLink" target="_blank" class="col">
                <img
                  :src="katalog.src"
                  style="width: 300px; height: 400px"
                  class="q-ma-sm"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
      </div>
    </pageBody>
  </page>
</template>

<script setup>
import { ref, onMounted } from "vue";

const katalozi = ref([]);

async function fetchKatalozi() {
  try {
    const response = await fetch(
      "https://raw.githack.com/anzelikam/padinaKomerc-update/main/katalozi.js"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch catalog data");
    }
    const data = await response.json();

    console.log("data", data);

    katalozi.value = data;
    console.log("value", katalozi.value);
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  fetchKatalozi();
});
</script>
