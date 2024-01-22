<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      bordered
      class="bg-grey-3 text-primary"
      v-if="$route.path !== '/home'"
    >
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey-8"
      >
        <q-route-tab
          v-for="navItem in navigacija.navItems"
          :key="navItem.root"
          :to="navItem.to"
          :icon="navItem.icon"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useStoreOmiljeno } from "../stores/storeOmiljeno";
import { useStoreNavigacija } from "../stores/storeNavigacija";

const storeOmiljeno = useStoreOmiljeno();
const navigacija = useStoreNavigacija();

storeOmiljeno.getOmiljeniProizvodiFromLocalS();
</script>

<style scoped>
.nonActive {
  color: #f0f7d4;
}
.active {
  color: #f4d52a;
}

.nonActiveDrawer {
  color: grey;
}
.activeDrawer {
  color: #ea202c;
}

.toggleMenuButton {
  float: right;
  display: block;
}
.toggleNavButtons {
  display: none;
}

@media screen and (min-width: 790px) {
  .toggleMenuButton {
    display: none;
  }
  .toggleNavButtons {
    display: block;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
