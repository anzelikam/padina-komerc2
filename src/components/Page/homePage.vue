<template>
  <div class="page absolute-top window-height bg-white">
    <slot />

    <router-view v-slot="{ Component }">
      <transition
        appear
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
        :css="navigacija.pageTransition && !navigacija.iosBrowserSwipingBack"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { useStoreNavigacija } from "../../stores/storeNavigacija";

const navigacija = useStoreNavigacija();
</script>

<style></style>
