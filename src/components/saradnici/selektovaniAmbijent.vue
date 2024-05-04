<template>
  <div class="justify-center" style="max-width: 800px; margin: 0 auto">
    <div v-for="ambijent in ambijenti" :key="ambijent.slika">
      <img
        class="ambijent rounded q-mb-md"
        :src="ambijent.slika"
        @click="
          selektovaniProizvodi(
            ambijent.selektovano,
            ambijent.imagePath,
            ambijent.naziv,
            ambijent.imageExt
          )
        "
      />
    </div>

    <div class="row justify-center" style="max-width: 550px; margin: 0 auto">
      <div
        v-for="celina in celineAmbijenta"
        :key="celina.slika"
        class="col-xs-2 celinaAmbijenta"
        @click="
          selektovaniProizvodi(
            celina.selektovano,
            celina.imagePath,
            celina.naziv,
            celina.imageExt
          )
        "
      >
        <img class="celinaAmbijentaIcon" :src="celina.slika" />
        <div style="height: 40px">
          <p class="text-white celinaAmbijentaNaziv">
            {{ celina.naziv.toLocaleUpperCase() }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <br /><br />

  <q-dialog
    v-model="showPodgrupaAmbijenta"
    :maximized="maximizedToggle"
    transition-show="slide-left"
    transition-hide="slide-right"
    animated
    transition-duration="400"
  >
    <div class="bg-white">
      <selektovanaGrupaNamestaja
        :prethodnaStranica="nazivAmbijenta"
        :ambijenti="ambijenti"
        :proizvodi="podgrupaAmbijenta"
        :podgrupaAmbijentaImagePath="podgrupaAmbijentaImagePath"
        :podgrupaAmbijentaNaziv="podgrupaAmbijentaNaziv"
        :imageExt="podgrupaAmbijentaImageExtension"
      ></selektovanaGrupaNamestaja>
    </div>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useStorePodgrupaAmbijenta } from "../../stores/storePodgrupaAmbijenta";
import selektovanaGrupaNamestaja from "../../components/saradnici/selektovanaGrupaNamestaja.vue";

const storePodgrupaAmbijenta = useStorePodgrupaAmbijenta();
const podgrupaAmbijenta = ref(storePodgrupaAmbijenta.podgrupaAmbijenta);

const podgrupaAmbijentaImagePath = ref(
  storePodgrupaAmbijenta.podgrupaAmbijentaImagePath
);
const podgrupaAmbijentaImageExtension = ref(
  storePodgrupaAmbijenta.podgrupaAmbijentaImageExtension
);
const podgrupaAmbijentaNaziv = ref(
  storePodgrupaAmbijenta.podgrupaAmbijentaNaziv
);
const showPodgrupaAmbijenta = ref(false);
const maximizedToggle = ref(true);

const props = defineProps({
  ambijenti: {
    type: Array,
  },
  celineAmbijenta: {
    type: Array,
  },
  nazivAmbijenta: {
    type: String,
  },
});

function selektovaniProizvodi(selected, image, name, ext) {
  console.log("selected", selected);
  console.log("image", image);
  showPodgrupaAmbijenta.value = true;
  podgrupaAmbijenta.value = selected;
  podgrupaAmbijentaImagePath.value = image;
  podgrupaAmbijentaNaziv.value = name;
  podgrupaAmbijentaImageExtension.value = ext;
}
</script>

<style>
.ambijent {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #091d34;
  max-width: 90%;
  cursor: pointer;
}
.ambijent:hover {
  border: 1px solid white;
}

.celinaAmbijentaIcon {
  max-width: 60px;
  padding-top: 5px;
}
.celinaAmbijentaNaziv {
  font-size: 10px;
}
@media screen and (max-width: 800px) {
  .celinaAmbijentaIcon {
    width: 30px;
  }
  .celinaAmbijentaNaziv {
    font-size: 8px;
  }
}

.celinaAmbijenta {
  background: rgba(128, 128, 128, 0.2);
  max-width: 100px;
  transition: ease;
  cursor: pointer;
  border: 1px solid #091d34;
  border-radius: 5px;
  margin: 2px;
}

.celinaAmbijenta:hover {
  border: 1px solid white;
  border-radius: 5px;
}
</style>
