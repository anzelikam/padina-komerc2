<template>
  <q-page class="flex flex-center bg-positive">
    <pageHeader>
      <template #buttons-left>
        <mainHeader></mainHeader>
        <pageHeaderBtnBack label="Ambijenti"></pageHeaderBtnBack>
      </template>
      <template #title>Kancelarije</template>
    </pageHeader>
    <pageBody class="bg-dark">
      <div class="text-center">
        <div class="text-center" style="margin-top: 70px">
          <div class="col-2"></div>

          <div class="col-8">
            <h4 class="homePageText text-white">Kancelarije</h4>

            <br />

            <selektovaniAmbijent
              :ambijenti="ambijenti"
              :celineAmbijenta="celineAmbijenta"
            >
            </selektovaniAmbijent>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </pageBody>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

import { useStoreKancelarije } from "../../stores/storeKancelarije";
import { useStoreVisenamenskiNamestaj } from "../../stores/storeVisenamenskiNamestaj";
import selektovaniAmbijent from "../../components/saradnici/selektovaniAmbijent.vue";

const storeKancelarije = useStoreKancelarije();
const storeVisenamenskiNamestaj = useStoreVisenamenskiNamestaj();

const ambijenti = ref([
  {
    imagePath: "/images/ambijenti/kancelarije/",
    slika: "/images/ambijenti/kancelarije.jpg",
    naziv: "kancelarije ambijenti",
    selektovano: storeKancelarije.kancelarije,
    imageExt: ".jpg",
  },
]);

const celineAmbijenta = ref([
  {
    imagePath: "/images/leonidas/",
    slika: "/icons/kancelarijski-sto.png",
    naziv: "leonidas program",
    selektovano: storeKancelarije.leonidas,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/radni_stolovi/office/",
    slika: "/icons/radni-sto.png",
    naziv: "radni stolovi",
    selektovano: storeKancelarije.radniStolovi,
    imageExt: ".jpg",
  },
  {
    imagePath: "/images/radne_stolice/",
    slika: "/icons/radna-stolica.png",
    naziv: "radne stolice",
    selektovano: storeVisenamenskiNamestaj.radneStolice,
    imageExt: ".jpg",
  },
]);
</script>
