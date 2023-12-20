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

<!-- <template>
  <div>
    <page>
      <pageHeader>
        <template #title>Početak</template>
      </pageHeader>
      <pageBody>
        <div class="q-pa-lg">
          <q-btn
            to="home/child"
            label="Go To Child Page"
            color="primary"
            class="full-width q-mb-md"
            rounded
            unelevated
            no-caps
          ></q-btn>
          <p v-for="i in 20" :key="i">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ip
          </p>
        </div>
      </pageBody>
    </page>
  </div>
</template> -->

<script setup>
import { useStoreNavigacija } from "../../stores/storeNavigacija";

const navigacija = useStoreNavigacija();
</script>

<style></style>
<!-- <q-header bordered class="page-header bg-white absolute-top text-dark">
      <q-toolbar>
        <q-toolbar-title class="text-center text-body1">
          Quasar Framework
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->
