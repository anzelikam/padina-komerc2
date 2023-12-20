<template>
  <header
    class="page-header q-header q-layout__section--marginal fixed-top q-header--bordered page-header bg-white absolute-top text-dark"
  >
    <q-toolbar>
      <q-toolbar-title class="text-center">
        <q-avatar square>
          <img src="logo/logo-padinakomerc.png" />
        </q-avatar>
        <span class="text-accent">Padina</span>
        <span class="text-dark"> Komerc</span>
      </q-toolbar-title>
    </q-toolbar>

    <div class="q-toolbar row no-wrap items-center">
      <slot name="buttons-left" />

      <div
        class="q-toolbar__title ellipsis absolute-center q-pl-none text-dark text-body1"
      >
        <slot name="title" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { useStoreNavigacija } from "../../stores/storeNavigacija";

const navigacija = useStoreNavigacija();
</script>
