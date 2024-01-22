<template>
  <q-page class="flex flex-center bg-dark" style="min-height: 1200px">
    <div style="width: 100%">
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
          <span class="title">Omiljeno </span>
        </template>
      </pageHeader>
      <pageBody>
        <q-card
          flat
          class="text-white text-center bg-dark"
          style="margin-top: 100px"
        >
          <q-card-section>
            <div class="text-h6">OMILJENO</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </q-card-section>
          <q-card-section>
            <div
              style="max-width: 1400px; margin: 0 auto"
              class="row justify-center bg-secondary"
            >
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
                  {{ proizvod.naziv.toUpperCase() }}
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
      </pageBody>
    </div>
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
    router.push("/namestaj");
  }
}

function hideFavorite() {
  emit("closeOmiljeno");
}
</script>
