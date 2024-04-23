<template>
  <q-breadcrumbs class="text-grey q-pl-md">
    <q-breadcrumbs-el label="Početna" to="/" class="text-grey" />
    <q-breadcrumbs-el
      v-if="$route.path !== '/namestaj'"
      label="Ambijenti"
      to="/namestaj"
      class="text-grey"
    />
    <q-breadcrumbs-el v-if="prethodnaStranica"
      ><q-btn
        flat
        rounded
        dense
        no-caps
        v-close-popup
        color="grey"
        :label="prethodnaStranica"
    /></q-breadcrumbs-el>
    <q-breadcrumbs-el label=". . ." />
  </q-breadcrumbs>
</template>

<script setup>
const props = defineProps({
  prethodnaStranica: {
    type: String,
  },
});
</script>
