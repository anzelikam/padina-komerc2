<template>
  <q-scroll-area class="page-body absolute-top window-height" :visible="false">
    <div class="page-body-spacer-header"></div>
    <slot />

    <div class="page-body-spacer-header"></div>
  </q-scroll-area>
</template>

<script setup></script>
