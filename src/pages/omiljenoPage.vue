<template>
  <q-page class="flex flex-center bg-dark">
    <pageHeaderOmiljeno> </pageHeaderOmiljeno>
    <pageBody>
      <!-- <q-btn
        icon="chevron_left"
        label="Nazad"
        flat
        rounded
        dense
        no-caps
        color="grey"
        v-close-popup
      /> -->
      <q-btn
        icon="chevron_left"
        label="Nazad"
        flat
        rounded
        dense
        no-caps
        color="grey"
        @click="router.back()"
      />
      <div style="max-width: 1400px; margin: 0 auto">
        <q-card flat class="text-white text-center bg-dark">
          <div class="text-h6">OMILJENO</div>

          <q-card-section class="q-pt-none">
            Uporedite vaše izabrane proizvode.
          </q-card-section>
          <div style="margin-bottom: 40px">
            <q-btn
              flat
              style="color: grey"
              icon="delete"
              label="OBRIŠI SVE"
              class="float-right"
              @click="deleteAll"
            />
          </div>
          <q-card-section class="bg-secondary">
            <div class="row justify-center">
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
                    proizvod.imageExt
                  "
                />

                <p style="text-transform: capitalize" class="text-dark">
                  {{ proizvod.naziv.toUpperCase() }} (
                  {{ proizvod.proizvodjac }} )
                  <q-btn
                    flat
                    icon="close"
                    class="text-accent"
                    @click="deleteProizvod(index, proizvod)"
                  />
                </p>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </pageBody>
  </q-page>
</template>

<script setup>
import { useStoreOmiljeno } from "../stores/storeOmiljeno";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStorePodgrupaAmbijenta } from "src/stores/storePodgrupaAmbijenta";

const storeOmiljeno = useStoreOmiljeno();
const storePodgrupaAmbijenta = useStorePodgrupaAmbijenta();
const omiljeniProizvodi = ref(storeOmiljeno.omiljeniProizvodi);
const router = useRouter();

const emit = defineEmits(["closeOmiljeno"]);

function deleteProizvod(index, proizvod) {
  storeOmiljeno.favorite = false;
  storePodgrupaAmbijenta.favorite = false;
  storeOmiljeno.deleteOmiljeniProizvod(index, proizvod);

  if (omiljeniProizvodi.value.length === 0) {
    router.push("/");
  }
}
function deleteAll() {
  omiljeniProizvodi.value.length = 0;
  router.push("/");
}
</script>
