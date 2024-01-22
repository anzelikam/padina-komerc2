import { defineStore } from "pinia";

export const useStoreKancelarije = defineStore("kancelarije", {
  state: () => ({
    // ambijenti
    kancelarije: [
      {
        proizvodjac: "matis",
        img: "leonidas-3",
        naziv: "leonidas",
        favorite: false,
        images: [
          "/images/ambijenti/kancelarije/matis/leonidas/leonidas-2.jpg",
          "/images/ambijenti/kancelarije/matis/leonidas/leonidas-3.jpg",
          "/images/ambijenti/kancelarije/matis/leonidas/leonidas-4.jpg",
          "/images/ambijenti/kancelarije/matis/leonidas/leonidas-5.jpg",
        ],
      },
    ],
    leonidas: [
      {
        proizvodjac: "matis",
        img: "artisan-fiokar",
        naziv: "fiokar -artisan",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "artisan-klizna-vrata-1v",
        naziv: "komoda klizna vrata 1v -artisan",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "artisan-komoda-1V3F",
        naziv: "komoda 1V3F -artisan",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "artisan-komoda-2V3F",
        naziv: "komoda 2V3F -artisan",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "artisan-ormar-80x154",
        naziv: "ormar 80x154 -artisan",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "artisan-otvorena-polica",
        naziv: "otvorena polica -artisan",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "artisan-radni-sto",
        naziv: "radni sto -artisan",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "belo-fiokar",
        naziv: "fiokar -belo",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "belo-klizna-vrata-1v",
        naziv: "klizna vrata 1v -belo",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "belo-komoda-2V3F",
        naziv: "komoda 2V3F -belo",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "belo-ormar-80x154",
        naziv: "ormar 80x154 -belo",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "belo-otvorena-polica",
        naziv: "otvorena polica -belo",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "belo-radni-sto",
        naziv: "radni sto -belo",
        favorite: false,
      },
    ],

    radniStolovi: [
      {
        proizvodjac: "matis",
        img: "leonidas-artisan",
        naziv: "leonidas artisan",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "leonidas-belo",
        naziv: "leonidas-belo",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "leon",
        naziv: "leon",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "happy",
        naziv: "happy",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "ana",
        naziv: "ana",
        favorite: false,
      },
      {
        proizvodjac: "attrium",
        img: "sale",
        naziv: "sale",
        favorite: false,
      },
      {
        proizvodjac: "attrium",
        img: "union",
        naziv: "union",
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
