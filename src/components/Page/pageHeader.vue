<template>
  <header
    class="page-header q-header q-layout__section--marginal fixed-top q-header--bordered page-header bg-grey-2 absolute-top text-dark"
  >
    <div class="q-toolbar row no-wrap items-center" style="margin-top: 60px">
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
import { useStoreOmiljeno } from "../../stores/storeOmiljeno";
import { useStorePodgrupaAmbijenta } from "../../stores/storePodgrupaAmbijenta";

const navigacija = useStoreNavigacija();
const storeOmiljeno = useStoreOmiljeno();
const storePodgrupaAmbijenta = useStorePodgrupaAmbijenta();
</script>
