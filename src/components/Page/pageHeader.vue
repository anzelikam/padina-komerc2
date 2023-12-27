<template>
  <header
    class="page-header q-header q-layout__section--marginal fixed-top q-header--bordered page-header bg-grey-2 absolute-top text-dark"
  >
    <!-- <q-toolbar>
      <q-toolbar-title class="text-center">
        <q-avatar square>
          <img src="logo/logo-padinakomerc.png" style="width: 70px" />
        </q-avatar>
        <span class="text-accent"> Padina</span>
        <span class="text-dark"> Komerc</span>
      </q-toolbar-title>
    </q-toolbar> -->

    <div class="q-toolbar row no-wrap items-center">
      <slot name="buttons-left" />

      <div
        class="q-toolbar__title ellipsis absolute-center q-pl-none text-dark text-body1"
      >
        <slot name="title" />

        <span v-if="$route.path !== '/namestaj/omiljeno'">
          <q-btn
            class="q-ml-sm"
            v-if="storeOmiljeno.omiljeniProizvodi.length"
            flat
            round
            text-color="dark"
            color="white"
            icon="las la-heart"
            to="/namestaj/omiljeno"
        /></span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useStoreNavigacija } from "../../stores/storeNavigacija";
import { useStoreOmiljeno } from "../../stores/storeOmiljeno";

const navigacija = useStoreNavigacija();
const storeOmiljeno = useStoreOmiljeno();
</script>
