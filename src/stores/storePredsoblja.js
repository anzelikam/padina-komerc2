import { defineStore } from "pinia";

export const useStorePredsoblja = defineStore("predsoblja", {
  state: () => ({
    // ambijenti
    predsoblja: [
      {
        proizvodjac: "matis",
        img: "denver",
        naziv: "denver",
        favorite: false,
        images: ["/images/ambijenti/predsoblja/matis/denver.jpg"],
      },
      {
        proizvodjac: "jela",
        img: "evergreen",
        naziv: "evergreen",
        favorite: false,
        images: ["/images/ambijenti/predsoblja/jela/evergreen.jpg"],
      },
      {
        proizvodjac: "attrium",
        img: "arija",
        naziv: "arija",
        favorite: false,
        images: ["/images/ambijenti/predsoblja/attrium/arija.jpg"],
      },
    ],
    kolekcije: [
      {
        proizvodjac: "matis",
        img: "apolon",
        naziv: "apolon",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "denver",
        naziv: "denver",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "donatelo",
        naziv: "donatelo",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "elegance",
        naziv: "elegance",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "elegance-belo",
        naziv: "elegance -belo",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "elegance-belo-sjaj",
        naziv: "elegance belo -sjaj",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "elegance-pesak-sjaj",
        naziv: "elegance pesak -sjaj ",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "genova",
        naziv: "genova",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "leonidas",
        naziv: "leonidas",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "leonidas-belo",
        naziv: "leonidas -belo",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "porto",
        naziv: "porto",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "rustik-1",
        naziv: "rustik 1",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "rustik-2",
        naziv: "rustik 2",
        favorite: false,
      },
      {
        proizvodjac: "attrium",
        img: "arija",
        naziv: "arija",
        favorite: false,
      },
      {
        proizvodjac: "attrium",
        img: "kapri",
        naziv: "kapri",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "avis",
        naziv: "avis",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "azur",
        naziv: "azur",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "evergreen",
        naziv: "evergreen",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "gala",
        naziv: "gala",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "onyx",
        naziv: "onyx",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "piano",
        naziv: "piano",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "rio",
        naziv: "rio",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "stela",
        naziv: "stela",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "tara",
        naziv: "tara",
        favorite: false,
      },
    ],

    cipelari: [
      {
        proizvodjac: "matis",
        img: "roma1",
        naziv: "roma 1",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "roma3",
        naziv: "roma 3",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "roma150",
        naziv: "roma 150",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "odisej3",
        naziv: "odisej 3",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "odisej4",
        naziv: "odisej 4",
        favorite: false,
      },
      {
        proizvodjac: "attrium",
        img: "stela",
        naziv: "stela",
        favorite: false,
      },
      {
        proizvodjac: "attrium",
        img: "stela-mali",
        naziv: "stela mali",
        favorite: false,
      },
      {
        proizvodjac: "attrium",
        img: "univer",
        naziv: "univer",
        favorite: false,
      },
    ],
  }),
  getters: {},
  actions: {},
});
