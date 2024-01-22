import { defineStore } from "pinia";

export const useStoreKuhinje = defineStore("kuhinje", {
  state: () => ({
    // ambijenti
    kuhinje: [
      {
        proizvodjac: "jela",
        img: "01",
        naziv: "infinity",
        favorite: false,
        images: [
          "/images/ambijenti/kuhinje/jela/infinity/01.jpg",
          "/images/ambijenti/kuhinje/jela/infinity/02.jpg",
          "/images/ambijenti/kuhinje/jela/infinity/03.jpg",
          "/images/ambijenti/kuhinje/jela/infinity/04.jpg",
          "/images/ambijenti/kuhinje/jela/infinity/05.jpg",
        ],
      },
      {
        proizvodjac: "jela",
        img: "02",
        naziv: "evergreen",
        favorite: false,
        images: [
          "/images/ambijenti/kuhinje/jela/evergreen/01.jpg",
          "/images/ambijenti/kuhinje/jela/evergreen/02.jpg",
          "/images/ambijenti/kuhinje/jela/evergreen/03.jpg",
          "/images/ambijenti/kuhinje/jela/evergreen/04.jpg",
          "/images/ambijenti/kuhinje/jela/evergreen/05.jpg",
          "/images/ambijenti/kuhinje/jela/evergreen/06.jpg",
          "/images/ambijenti/kuhinje/jela/evergreen/07.jpg",
          "/images/ambijenti/kuhinje/jela/evergreen/08.jpg",
          "/images/ambijenti/kuhinje/jela/evergreen/09.jpg",
          "/images/ambijenti/kuhinje/jela/evergreen/10.jpg",
        ],
      },
      {
        proizvodjac: "jela",
        img: "03",
        naziv: "evia",
        favorite: false,
        images: [
          "/images/ambijenti/kuhinje/jela/evia/01.jpg",
          "/images/ambijenti/kuhinje/jela/evia/02.jpg",
          "/images/ambijenti/kuhinje/jela/evia/03.jpg",
          "/images/ambijenti/kuhinje/jela/evia/04.jpg",
          "/images/ambijenti/kuhinje/jela/evia/05.jpg",
          "/images/ambijenti/kuhinje/jela/evia/06.jpg",
          "/images/ambijenti/kuhinje/jela/evia/07.jpg",
          "/images/ambijenti/kuhinje/jela/evia/08.jpg",
          "/images/ambijenti/kuhinje/jela/evia/09.jpg",
          "/images/ambijenti/kuhinje/jela/evia/10.jpg",
          "/images/ambijenti/kuhinje/jela/evia/11.jpg",
        ],
      },
      {
        proizvodjac: "jela",
        img: "04",
        naziv: "highline",
        favorite: false,
        images: [
          "/images/ambijenti/kuhinje/jela/highline/01.jpg",
          "/images/ambijenti/kuhinje/jela/highline/02.jpg",
          "/images/ambijenti/kuhinje/jela/highline/03.jpg",
          "/images/ambijenti/kuhinje/jela/highline/04.jpg",
          "/images/ambijenti/kuhinje/jela/highline/05.jpg",
          "/images/ambijenti/kuhinje/jela/highline/06.jpg",
        ],
      },
      {
        proizvodjac: "jela",
        img: "05",
        naziv: "invictus",
        favorite: false,
        images: [
          "/images/ambijenti/kuhinje/jela/invictus/01.jpg",
          "/images/ambijenti/kuhinje/jela/invictus/02.jpg",
          "/images/ambijenti/kuhinje/jela/invictus/03.jpg",
        ],
      },
      {
        proizvodjac: "jela",
        img: "06",
        naziv: "modern",
        favorite: false,
        images: [
          "/images/ambijenti/kuhinje/jela/modern/01.jpg",
          "/images/ambijenti/kuhinje/jela/modern/02.jpg",
          "/images/ambijenti/kuhinje/jela/modern/03.jpg",
          "/images/ambijenti/kuhinje/jela/modern/04.jpg",
          "/images/ambijenti/kuhinje/jela/modern/05.jpg",
          "/images/ambijenti/kuhinje/jela/modern/06.jpg",
          "/images/ambijenti/kuhinje/jela/modern/07.jpg",
          "/images/ambijenti/kuhinje/jela/modern/08.jpg",
          "/images/ambijenti/kuhinje/jela/modern/09.jpg",
          "/images/ambijenti/kuhinje/jela/modern/10.jpg",
          "/images/ambijenti/kuhinje/jela/modern/11.jpg",
        ],
      },
      {
        proizvodjac: "jela",
        img: "07",
        naziv: "tara",
        favorite: false,
        images: [
          "/images/ambijenti/kuhinje/jela/tara/01.jpg",
          "/images/ambijenti/kuhinje/jela/tara/02.jpg",
          "/images/ambijenti/kuhinje/jela/tara/03.jpg",
          "/images/ambijenti/kuhinje/jela/tara/04.jpg",
          "/images/ambijenti/kuhinje/jela/tara/05.jpg",
          "/images/ambijenti/kuhinje/jela/tara/06.jpg",
          "/images/ambijenti/kuhinje/jela/tara/07.jpg",
        ],
      },
      {
        proizvodjac: "matis",
        img: "01",
        naziv: "IN",
        favorite: false,
        images: [
          "/images/ambijenti/kuhinje/matis/IN/01.jpg",
          "/images/ambijenti/kuhinje/matis/IN/02.jpg",
          "/images/ambijenti/kuhinje/matis/IN/03.jpg",
          "/images/ambijenti/kuhinje/matis/IN/04.jpg",
        ],
      },
      {
        proizvodjac: "matis",
        img: "02",
        naziv: "MDFalba",
        favorite: false,
        images: [
          "/images/ambijenti/kuhinje/matis/MDFalba/01.jpg",
          "/images/ambijenti/kuhinje/matis/MDFalba/02.jpg",
          "/images/ambijenti/kuhinje/matis/MDFalba/03.jpg",
        ],
      },
      {
        proizvodjac: "matis",
        img: "03",
        naziv: "MDFcontempo",
        favorite: false,
        images: [
          "/images/ambijenti/kuhinje/matis/MDFcontempo/01.jpg",
          "/images/ambijenti/kuhinje/matis/MDFcontempo/02.jpg",
          "/images/ambijenti/kuhinje/matis/MDFcontempo/03.jpg",
          "/images/ambijenti/kuhinje/matis/MDFcontempo/04.jpg",
          "/images/ambijenti/kuhinje/matis/MDFcontempo/05.jpg",
          "/images/ambijenti/kuhinje/matis/MDFcontempo/06.jpg",
        ],
      },
      {
        proizvodjac: "matis",
        img: "04",
        naziv: "MDFIN",
        favorite: false,
        images: [
          "/images/ambijenti/kuhinje/matis/MDFIN/01.jpg",
          "/images/ambijenti/kuhinje/matis/MDFIN/02.jpg",
          "/images/ambijenti/kuhinje/matis/MDFIN/03.jpg",
        ],
      },
      {
        proizvodjac: "matis",
        img: "05",
        naziv: "MDFlina",
        favorite: false,
        images: [
          "/images/ambijenti/kuhinje/matis/MDFlina/01.jpg",
          "/images/ambijenti/kuhinje/matis/MDFlina/02.jpg",
          "/images/ambijenti/kuhinje/matis/MDFlina/03.jpg",
        ],
      },
      {
        proizvodjac: "matis",
        img: "06",
        naziv: "MDFrustik",
        favorite: false,
        images: [
          "/images/ambijenti/kuhinje/matis/MDFrustik/01.jpg",
          "/images/ambijenti/kuhinje/matis/MDFrustik/02.jpg",
          "/images/ambijenti/kuhinje/matis/MDFrustik/03.jpg",
          "/images/ambijenti/kuhinje/matis/MDFrustik/04.jpg",
          "/images/ambijenti/kuhinje/matis/MDFrustik/05.jpg",
          "/images/ambijenti/kuhinje/matis/MDFrustik/06.jpg",
        ],
      },
      {
        proizvodjac: "attrium",
        img: "01",
        naziv: "jelena",
        favorite: false,
        // images: ["/images/kuhinje/attrium/01.png"],
      },
      {
        proizvodjac: "attrium",
        img: "02",
        naziv: "lela",
        favorite: false,
        // images: ["/images/kuhinje/attrium/02.png"],
      },
      {
        proizvodjac: "attrium",
        img: "03",
        naziv: "đina",
        favorite: false,
        // images: ["/images/kuhinje/attrium/03.png"],
      },
      {
        proizvodjac: "attrium",
        img: "04",
        naziv: "đurđa",
        favorite: false,
        // images: ["/images/kuhinje/attrium/04.png"],
      },
      {
        proizvodjac: "attrium",
        img: "05",
        naziv: "dunja",
        favorite: false,
        // images: ["/images/kuhinje/attrium/05.png"],
      },
      {
        proizvodjac: "attrium",
        img: "06",
        naziv: "nađa",
        favorite: false,
        // images: ["/images/kuhinje/attrium/06.png"],
      },
    ],

    trpezarijskiStolovi: [
      {
        proizvodjac: "mita",
        img: "01",
        naziv: "afrodita",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "02",
        naziv: "ares 110",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "03",
        naziv: "ares 160",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "04",
        naziv: "aurora",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "05",
        naziv: "cessare 110",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "06",
        naziv: "cessare 175",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "07",
        naziv: "dante 125",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "08",
        naziv: "dante 160",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "09",
        naziv: "deluxe",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "10",
        naziv: "eros 110",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "11",
        naziv: "eros 160",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "12",
        naziv: "ethienne",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "13",
        naziv: "frontslide 180",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "14",
        naziv: "gio",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "15",
        naziv: "milano r 90",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "16",
        naziv: "milano r 150",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "17",
        naziv: "ml",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "18",
        naziv: "nena+",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "19",
        naziv: "rs",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "20",
        naziv: "sara",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "21",
        naziv: "x130",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "22",
        naziv: "x160",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "23",
        naziv: "leon 130",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "24",
        naziv: "leon 160",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "01",
        naziv: "alex",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "02",
        naziv: "grand",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "03",
        naziv: "milano",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "04",
        naziv: "atina",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "05",
        naziv: "siena",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "06",
        naziv: "kairo",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "07",
        naziv: "elegance",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "08",
        naziv: "leon",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "09",
        naziv: "orion",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "10",
        naziv: "perla",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "11",
        naziv: "venus",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "12",
        naziv: "barski komplet",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "13",
        naziv: "danon",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "14",
        naziv: "scala",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "15",
        naziv: "mia",
        favorite: false,
      },
      {
        proizvodjac: "hrast",
        img: "16",
        naziv: "pariz",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "01",
        naziv: "rim",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "02",
        naziv: "kleopatra",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "01",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "02",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "03",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "04",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "05",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "06",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "07",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "08",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "09",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "10",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "11",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "12",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "13",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "belibor",
        img: "01",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "belibor",
        img: "02",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "belibor",
        img: "03",
        naziv: "",
        favorite: false,
      },
    ],
    trpezarijskeStolice: [
      {
        proizvodjac: "mita",
        img: "01",
        naziv: "ema",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "02",
        naziv: "slavica",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "03",
        naziv: "meriva",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "04",
        naziv: "aura",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "05",
        naziv: "fabia",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "06",
        naziv: "sorrento",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "07",
        naziv: "lucia",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "08",
        naziv: "tacit",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "09",
        naziv: "sienne",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "10",
        naziv: "bianca",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "11",
        naziv: "clara",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "12",
        naziv: "milano",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "13",
        naziv: "melanie",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "14",
        naziv: "teodora",
        favorite: false,
      },
      {
        proizvodjac: "mita",
        img: "15",
        naziv: "atina",
        favorite: false,
      },

      {
        proizvodjac: "djuka",
        img: "01",
        naziv: "serija x",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "02",
        naziv: "m12",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "03",
        naziv: "m5",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "04",
        naziv: "m8",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "05",
        naziv: "m7",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "06",
        naziv: "m13",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "07",
        naziv: "m10 kleopatra",
        favorite: false,
      },
      {
        proizvodjac: "djuka",
        img: "08",
        naziv: "m10 linea",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "01",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "02",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "03",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "04",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "05",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "06",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "07",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "08",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "09",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "10",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "11",
        naziv: "",
        favorite: false,
      },
      {
        proizvodjac: "terzic",
        img: "12",
        naziv: "",
        favorite: false,
      },
    ],
  }),
  getters: {},
  actions: {},
});
