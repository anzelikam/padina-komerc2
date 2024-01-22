import { defineStore } from "pinia";

export const useStoreNavigacija = defineStore("navigacija", {
  state: () => ({
    pageTransition: false,
    iosBrowserSwipingBack: false,
    navItems: [
      {
        root: "/home",
        to: "/home",
        icon: "las la-home",
        label: "Početak",
      },
      {
        root: "/namestaj-po-meri",
        to: "/namestaj-po-meri",
        icon: "las la-pencil-ruler",
        label: "Naši proizvodi",
      },
      {
        root: "/namestaj",
        to: "/namestaj",
        icon: "las la-couch",
        label: "Nameštaj",
      },

      {
        root: "/o-nama",
        to: "/o-nama",
        icon: "las la-info-circle",
        label: "O nama",
      },
    ],
  }),
  getters: {},
  actions: {},
});
