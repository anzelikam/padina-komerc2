import { defineStore } from "pinia";

export const useStoreVisenamenskiNamestaj = defineStore("visenamenski", {
  state: () => ({
    vitrine: [
      {
        proizvodjac: "hrast",
        img: "01",
        naziv: "grand",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "02",
        naziv: "kairo",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "03",
        naziv: "leon",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "04",
        naziv: "orion biblioteka",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "05",
        naziv: "orion",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "01",
        naziv: "jednokrilna biblioteka",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "02",
        naziv: "dvokrilna biblioteka",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "03",
        naziv: "kleopatra",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "04",
        naziv: "dvokrilna nadogradnja",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "05",
        naziv: "trokrilna nadogradnja",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "06",
        naziv: "jednokrilna serija x",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "07",
        naziv: "dvokrilna serija x",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "01",
        naziv: "barcelona",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "02",
        naziv: "sienna niska",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "03",
        naziv: "sienna visoka",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "04",
        naziv: "porto niska",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "05",
        naziv: "porto visoka",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "06",
        naziv: "treviso visoka",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "07",
        naziv: "linkStyle visoka",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "08",
        naziv: "denver niska",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "09",
        naziv: "denver visoka",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "10",
        naziv: "mediolan",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "11",
        naziv: "staklena visoka",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "12",
        naziv: "staklena niska",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "01",
        naziv: "avis niska",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "02",
        naziv: "avis visoka",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "03",
        naziv: "azur",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "04",
        naziv: "brio",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "05",
        naziv: "evergreen staklo",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "06",
        naziv: "evergreen",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "07",
        naziv: "gala-1",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "08",
        naziv: "gala-2",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "09",
        naziv: "gala-3",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "10",
        naziv: "gala-4",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "11",
        naziv: "gala-5",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "12",
        naziv: "gala-6",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "13",
        naziv: "f1",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "14",
        naziv: "onyx-1",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "15",
        naziv: "onyx-2",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "16",
        naziv: "piano-1",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "17",
        naziv: "piano-2",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "18",
        naziv: "rio",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "19",
        naziv: "stela-1",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "20",
        naziv: "stela-2",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "21",
        naziv: "tara-1",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "22",
        naziv: "tara-2",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "23",
        naziv: "tara-3",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "24",
        naziv: "vida",
        favorite: false,
      },
    ],

    komode: [
      {
        proizvodjac: "hrast",
        img: "01",
        naziv: "grand dvokrilna",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "02",
        naziv: "grand trokrilna",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "03",
        naziv: "kairo dvokrilna",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "04",
        naziv: "kairo trokrilna",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "05",
        naziv: "kairo-tv",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "06",
        naziv: "leon",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "07",
        naziv: "leon tv",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "08",
        naziv: "orion",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "09",
        naziv: "orion fioke",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "10",
        naziv: "orion tv",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "11",
        naziv: "elegance",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "12",
        naziv: "elegance ogledalo",
        favorite: false,
      },
      // {
      //   proizvodjac: "hrast",
      //   img: "13",
      //   naziv: "perla",
      //   favorite: false,
      // },
      {
        proizvodjac: "hrast",
        img: "14",
        naziv: "maki 4 fioke",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "15",
        naziv: "maki dvodelna",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "16",
        naziv: "maki trodelna 2",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "17",
        naziv: "maki trodelna 3",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "18",
        naziv: "tv maki-a",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "19",
        naziv: "tv maki-b",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "20",
        naziv: "tv maki-c",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "21",
        naziv: "tv maki-d",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "22",
        naziv: "tv maki-e",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "23",
        naziv: "tv maki-fg",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "24",
        naziv: "maki komoda2",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "25",
        naziv: "tv stalak",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "26",
        naziv: "maki ormaric",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "27",
        naziv: "maki polica za knjige",
        favorite: false,
      },

      {
        proizvodjac: "djuka",
        img: "01",
        naziv: "dvokrilna-tv serija x",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "02",
        naziv: "trokrilna-tv serija x",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "03",
        naziv: "trokrilna serija x",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "04",
        naziv: "jednokrilna",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "05",
        naziv: "dvokrilna",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "06",
        naziv: "trokrilna",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "07",
        naziv: "trokrilna tv",
        favorite: false,
      },
    ],
  }),
  getters: {},
  actions: {},
});
