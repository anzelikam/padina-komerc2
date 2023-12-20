import { defineStore } from "pinia";

export const useStorePodgrupaAmbijenta = defineStore("podgrupaAmbijenta", {
  state: () => ({
    podgrupaAmbijenta: [],
    podgrupaAmbijentaImagePath: "",
    podgrupaAmbijentaNaziv: "",
    podgrupaAmbijentaImageExtension: "",
  }),
  getters: {},
  actions: {},
});
