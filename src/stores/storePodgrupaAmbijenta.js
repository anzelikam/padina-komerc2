import { defineStore } from "pinia";

export const useStorePodgrupaAmbijenta = defineStore("podgrupaAmbijenta", {
  state: () => ({
    podgrupaAmbijenta: {
      podgrupe: [],
      imagePath: "",
      naziv: "",
      imageExtension: "",
      showPodgrupu: false,
    },
  }),
  getters: {},
  actions: {},
});
