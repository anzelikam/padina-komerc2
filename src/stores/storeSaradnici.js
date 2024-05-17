import { defineStore } from "pinia";

export const useStoreSaradnici = defineStore("saradnici", {
  state: () => ({
    saradniciData: [
      {
        proizvodjac: "jela",
        logo: "/logo/logo-jela.png",
        link: "https://jela.rs/",
        boja: "yellow-7",
      },
      {
        proizvodjac: "extrasan",
        logo: "/logo/logo-extrasan.png",
        link: "https://namestajextra.com/",
        boja: "pink-7",
      },
      {
        proizvodjac: "matis",
        logo: "/logo/logo-matis.png",
        link: "https://matis.rs/",
        boja: "purple-7",
      },

      {
        proizvodjac: "numanovic",
        logo: "/logo/logo-numanovic.png",
        link: "https://www.numanovic.com/",
        boja: "purple-10",
      },
      {
        proizvodjac: "lederlux",
        logo: "/logo/logo-lederlux.png",
        link: "https://lederlux.rs/",
        lederlux: "blue-7",
      },
      {
        proizvodjac: "attrium",
        logo: "/logo/logo-attrium.png",
        link: "https://www.attriumcacak.rs/home-center/index.php?route=common/home",
        boja: "light-green-12",
      },
      {
        proizvodjac: "mita",
        logo: "/logo/logo-mita.svg",
        link: "https://mita.global/proizvodi/",
        boja: "grey-9",
      },
      {
        proizvodjac: "djuka",
        logo: "/logo/logo-djuka.png",
        link: "https://djukapromet.com/",
        boja: "orange-7",
      },

      {
        proizvodjac: "kocic",
        logo: "/logo/logo-kocic.png",
        link: "https://drvoprodukt-kocic-doo.business.site/",
        boja: "cyan",
      },
      {
        proizvodjac: "belibor",
        logo: "/logo/logo-belibor.png",
        link: "https://belibor.rs/",
        boja: "green-7",
      },
      {
        proizvodjac: "stiljasen",
        logo: "/logo/logo-stiljasen.png",
        link: "https://www.stiljasen.com/",
        boja: "red-10",
      },
      {
        proizvodjac: "terzic",
        logo: "/logo/logo-terzic.png",
        link: "https://sr-rs.facebook.com/stoliceterzic/",
        boja: "teal",
      },

      {
        proizvodjac: "hrast",
        logo: "/logo/logo-hrast.png",
        link: "https://hrast.rs/",
        boja: "red-14",
      },
    ],
  }),
  getters: {},
  actions: {},
});
