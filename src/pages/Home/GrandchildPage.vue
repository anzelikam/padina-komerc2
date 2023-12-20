<template>
  <page>
    <pageHeader>
      <template #buttons-left>
        <pageHeaderBtnBack label="Child"></pageHeaderBtnBack>
        <!-- <q-btn
            to="/home"
            label="Home"
            icon="chevron_left"
            color="primary"
            flat
            rounded
            dense
            no-caps
          ></q-btn> -->
      </template>
      <template #title>Grandchild</template>
    </pageHeader>
    <pageBody>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md">How deep is this?</div>

        <q-option-group
          v-model="group"
          :options="options"
          color="primary"
          class="q-mb-md"
          inline
        />

        <p v-for="i in 20" :key="i">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ip
        </p>
      </div>
    </pageBody>
  </page>
</template>

<script setup>
import { ref } from "vue";

const group = ref("op1");

const options = [
  {
    name: "op1",
    label: "KInda deep",
    value: "op1",
  },
  {
    name: "op2",
    label: "Very deep",
    value: "op2",
  },
  {
    name: "op3",
    label: "So deep!",
    value: "op3",
  },
];
</script>

<!-- to="/home/child" -->
