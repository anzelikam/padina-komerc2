<template>
  <div class="justify-center" style="max-width: 800px; margin: 0 auto">
    <div v-for="ambijent in ambijenti" :key="ambijent.slika">
      <img
        class="ambijent"
        style="max-width: 90%; cursor: pointer; transition: ease 1s"
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

    <div class="row items-center" style="max-width: 800px">
      <div
        v-for="celina in celineAmbijenta"
        :key="celina.slika"
        class="col-sm-3 col-xs-3 q-mt-lg"
      >
        <img
          class="celinaAmbijenta"
          :src="celina.slika"
          @click="
            selektovaniProizvodi(
              celina.selektovano,
              celina.imagePath,
              celina.naziv,
              celina.imageExt
            )
          "
        />
        <div class="q-ma-sm" style="height: 50px">
          <p class="text-white">{{ celina.naziv.toLocaleUpperCase() }}</p>
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
    transition-duration="500"
  >
    <!-- enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight" -->
    <div class="bg-white">
      <selektovanaGrupaNamestaja
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
});

const emit = defineEmits(["openDialog"]);

function selektovaniProizvodi(selected, image, name, ext) {
  console.log("selected", selected);
  console.log("image", image);
  showPodgrupaAmbijenta.value = true;
  podgrupaAmbijenta.value = selected;
  podgrupaAmbijentaImagePath.value = image;
  podgrupaAmbijentaNaziv.value = name;
  podgrupaAmbijentaImageExtension.value = ext;
  emit("openDialog");
}
</script>

<style>
.ambijent {
  border: 1px solid inherit;
  padding: 5px;
}
.ambijent:hover {
  border: 1px solid white;
}
/* .ambijent:hover {
  box-shadow: 15px 15px 50px 10px #091d34;
} */

.celinaAmbijenta {
  cursor: pointer;
  transition: ease 1s;
  max-width: 80px;
  border: 1px solid inherit;
  padding: 10px;
}

.celinaAmbijenta:hover {
  border: 1px solid white;
}
</style>
