<template>
  <header
    class="page-header q-header q-layout__section--marginal fixed-top q-header--bordered page-header bg-grey-2 absolute-top text-dark"
  >
    <q-toolbar style="height: 60px">
      <slot name="buttons-left" />
      <q-toolbar-title>
        <router-link to="/home" style="text-decoration: none">
          <div class="row items-end">
            <img
              src="logo/logo-padinakomerc.png"
              style="width: 50px; margin-left: 12px"
            />
            <span
              class="text-h5 text-bold text-accent q-ml-sm"
              v-if="$route.path !== '/home'"
            >
              Padina Komerc
            </span>
          </div>
        </router-link>
      </q-toolbar-title>

      <router-link to="/omiljeno" style="text-decoration: none">
        <q-btn
          flat
          style="margin-right: 39px"
          v-if="storeOmiljeno.omiljeniProizvodi.length"
          round
          text-color="dark"
          color="white"
          icon="las la-heart"
        />
      </router-link>

      <!-- <q-btn
        flat
        style="margin-right: 39px"
        v-if="storeOmiljeno.omiljeniProizvodi.length"
        round
        text-color="dark"
        color="white"
        icon="las la-heart"
        @click="showFavorite = true"
      /> -->
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
import { useStoreOmiljeno } from "../../stores/storeOmiljeno";
import omiljeno from "../../pages/omiljenoPage.vue";

const storeOmiljeno = useStoreOmiljeno();
const showFavorite = ref(false);
const maximizedToggle = ref(true);
</script>
