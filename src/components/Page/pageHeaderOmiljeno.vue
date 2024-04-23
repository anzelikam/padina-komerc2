<template>
  <header
    class="page-header q-header q-layout__section--marginal fixed-top q-header--bordered page-header bg-grey-2 absolute-top text-dark"
  >
    <q-toolbar style="height: 70px">
      <slot name="buttons-left" />

      <router-link to="/home"
        ><img src="logo/logo-padinakomerc.png" style="width: 50px"
      /></router-link>
      <q-toolbar-title>
        <div class="text-h5 text-bold text-dark">
          Padina Komerc
        </div></q-toolbar-title
      >
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
import { useStoreNavigacija } from "../../stores/storeNavigacija";
import { useStoreOmiljeno } from "../../stores/storeOmiljeno";
import omiljeno from "../../pages/omiljenoPage.vue";

const showFavorite = ref(false);
const maximizedToggle = ref(true);
</script>
