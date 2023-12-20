<template>
  <q-btn
    @click="useGoBack"
    icon="chevron_left"
    color="primary"
    flat
    rounded
    dense
    no-caps
  ></q-btn>
</template>

<script setup>
import useGoBack from "src/use/useGoBack";
</script>
