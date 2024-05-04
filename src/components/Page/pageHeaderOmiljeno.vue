<template>
  <header
    class="page-header q-header q-layout__section--marginal fixed-top q-header--bordered page-header bg-grey-2 absolute-top text-dark"
  >
    <q-toolbar style="height: 60px">
      <slot name="buttons-left" />
      <q-toolbar-title style="cursor: pointer">
        <div class="row items-end" @click="goBack">
          <img
            src="logo/logo-padinakomerc.png"
            style="width: 50px; margin-left: 12px"
          />
          <span class="text-h5 text-bold text-accent q-ml-sm">
            Padina Komerc
          </span>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </header>

  <q-dialog
    persistent
    :maximized="maximizedToggle"
    v-model="showFavorite"
    transition-duration="400"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <div class="bg-dark" style="width: 100%">
      <omiljeno></omiljeno>
    </div>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import omiljeno from "../../pages/omiljenoPage.vue";

const router = useRouter();

function goBack() {
  router.push("/");
}

const showFavorite = ref(false);
const maximizedToggle = ref(true);
</script>
