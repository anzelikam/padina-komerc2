import { defineStore } from "pinia";

export const useStoreDecijeSobe = defineStore("decijeSobe", {
  state: () => ({
    // ambijenti
    decijeSobe: [
      {
        proizvodjac: "jela",
        img: "joy01",
        naziv: "joy",
        favorite: false,
        images: [
          "/images/ambijenti/decije_sobe/jela/joy/joy01.webp",
          "/images/ambijenti/decije_sobe/jela/joy/joy02.webp",
          "/images/ambijenti/decije_sobe/jela/joy/joy03.webp",
          "/images/ambijenti/decije_sobe/jela/joy/joy04.webp",
        ],
      },
      {
        proizvodjac: "jela",
        img: "kiki02",
        naziv: "kiki",
        favorite: false,
        images: [
          "/images/ambijenti/decije_sobe/jela/kiki/kiki01.webp",
          "/images/ambijenti/decije_sobe/jela/kiki/kiki02.webp",
          "/images/ambijenti/decije_sobe/jela/kiki/kiki03.webp",
          "/images/ambijenti/decije_sobe/jela/kiki/kiki04.webp",
          "/images/ambijenti/decije_sobe/jela/kiki/kiki05.webp",
        ],
      },
      {
        proizvodjac: "matis",
        img: "kinder01",
        naziv: "kinder",
        favorite: false,
        images: [
          "/images/ambijenti/decije_sobe/matis/kinder/kinder01.webp",
          "/images/ambijenti/decije_sobe/matis/kinder/kinder02.webp",
          "/images/ambijenti/decije_sobe/matis/kinder/kinder03.webp",
          "/images/ambijenti/decije_sobe/matis/kinder/kinder04.webp",
        ],
      },
      {
        proizvodjac: "matis",
        img: "numero01",
        naziv: "numero",
        favorite: false,
        images: [
          "/images/ambijenti/decije_sobe/matis/numero/numero01.webp",
          "/images/ambijenti/decije_sobe/matis/numero/numero02.webp",
          "/images/ambijenti/decije_sobe/matis/numero/numero03.webp",
          "/images/ambijenti/decije_sobe/matis/numero/numero04.webp",
          "/images/ambijenti/decije_sobe/matis/numero/numero05.webp",
          "/images/ambijenti/decije_sobe/matis/numero/numero06.webp",
        ],
      },
    ],
    krevetiSamci: [
      {
        proizvodjac: "extrasan",
        img: "flex-100x200",
        naziv: "flex 100x200",
        favorite: false,
      },
      {
        proizvodjac: "extrasan",
        img: "darija-100x200",
        naziv: "darija 100x200",
        favorite: false,
      },

      {
        proizvodjac: "extrasan",
        img: "elit-100x200",
        naziv: "elit 100x200",
        favorite: false,
      },
      {
        proizvodjac: "extrasan",
        img: "tesla-120x200",
        naziv: "tesla 120x200",
        favorite: false,
      },
      {
        proizvodjac: "extrasan",
        img: "mona-120x200",
        naziv: "mona 120x200",
        favorite: false,
      },
      {
        proizvodjac: "extrasan",
        img: "comfort-120x200",
        naziv: "comfort 120x200",
        favorite: false,
      },
      {
        proizvodjac: "extrasan",
        img: "amor",
        naziv: "amor",
        favorite: false,
      },
      {
        proizvodjac: "extrasan",
        img: "junior",
        naziv: "junior",
        favorite: false,
      },
      {
        proizvodjac: "extrasan",
        img: "tango",
        naziv: "tango",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "krevet-joy-kr90",
        naziv: "krevet joy kr90",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "krevet-kiki-kr120",
        naziv: "krevet kiki kr120",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "krevet-kiki-krd1",
        naziv: "krevet kiki krd1",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "krevet-kiki-krsp",
        naziv: "krevet kiki krsp",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "krevet-kiki-krt90",
        naziv: "krevet kiki krt90",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kaliopa",
        naziv: "kaliopa",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-120",
        naziv: "kinder 120",
        favorite: false,
      },

      {
        proizvodjac: "matis",
        img: "kinder-blok",
        naziv: "kinder-blok",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-na-sprat",
        naziv: "kinder na sprat",
        favorite: false,
      },

      {
        proizvodjac: "matis",
        img: "numero-blok",
        naziv: "numero blok",
        favorite: false,
      },

      {
        proizvodjac: "kocic",
        img: "kocic-03",
        naziv: "krevet 03",
        favorite: false,
      },
      {
        proizvodjac: "kocic",
        img: "kocic-04",
        naziv: "krevet 04",
        favorite: false,
      },

      {
        proizvodjac: "kocic",
        img: "kocic-06",
        naziv: "krevet 06",
        favorite: false,
      },
    ],
    garderoberiKomodeNocniOrmarici: [
      {
        proizvodjac: "jela",
        img: "komoda-joy-k13",
        naziv: "komoda joy k13",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "nocni-stocic-joy-ns2",
        naziv: "nocni stocic joy ns2",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "komoda-kiki-k12",
        naziv: "komoda kiki k12",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "komoda-kiki-k22",
        naziv: "komoda kiki k22",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "vitrina-kiki-f4",
        naziv: "vitrina kiki f4",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "nocni-stocic-kiki-ns2",
        naziv: "nocni-stocic kiki ns2",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "ormaric-kiki-or12",
        naziv: "ormaric kiki or12",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "garderober-joy-g32",
        naziv: "garderober joy g32",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "garderober-kiki-g1",
        naziv: "garderober kiki g1",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "garderober-kiki-g23",
        naziv: "garderober kiki g23",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "garderober-kiki-g33",
        naziv: "garderober kiki g33",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-belo-komoda-3f",
        naziv: "kinder belo komoda 3f",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-belo-ormar-1v1f",
        naziv: "kinder belo ormar 1v1f",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-belo-ormar-2v2f",
        naziv: "kinder belo ormar 2v2f",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-belo-ormar-2v3f",
        naziv: "kinder belo ormar 2v3f",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-belo-ormar-3v2f",
        naziv: "kinder belo ormar 3v2f",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-belo-vitrina",
        naziv: "kinder belo vitrina",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-komoda-3f",
        naziv: "kinder komoda 3f",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-ormar-1v1f",
        naziv: "kinder ormar 1v1f",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-ormar-2v2f",
        naziv: "kinder ormar 2v2f",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-ormar-2v3f",
        naziv: "kinder ormar 2v3f",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-ormar-3v2f",
        naziv: "kinder ormar 3v2f",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-vitrina",
        naziv: "kinder vitrina",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "numero-komoda-3f",
        naziv: "numero-komoda-3f",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "numero-ormar-1v2f",
        naziv: "numero ormar 1v2f",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "numero-ormar-2v2f",
        naziv: "numero ormar 2v2f",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "numero-ormar-2v4f",
        naziv: "numero ormar 2v4f",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "numero-ormar-3v2f",
        naziv: "numero ormar 3v2f",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "numero-vitrina-4f",
        naziv: "numero vitrina 4f",
        favorite: false,
      },
    ],
    radniStolovi: [
      {
        proizvodjac: "jela",
        img: "radni-sto-joy-ks3",
        naziv: "radni sto joy ks3",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "radni-sto-kiki-ks6",
        naziv: "radni sto kiki ks6",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "radni-sto-kiki-rs",
        naziv: "radni sto kiki rs",
        favorite: false,
      },
      {
        proizvodjac: "jela",
        img: "radni-sto-kiki-rs90",
        naziv: "radni sto kiki rs90",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-belo-bocni-stocic",
        naziv: "kinder-belo bocni stocic",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-belo-fiokar",
        naziv: "kinder-belo fiokar",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-belo-radni-sto",
        naziv: "kinder-belo radni sto",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-bocni-stocic",
        naziv: "kinder bocni stocic",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-fiokar",
        naziv: "kinder fiokar",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "kinder-radni-sto",
        naziv: "kinder radni sto",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "numero-fiokar",
        naziv: "numero fiokar",
        favorite: false,
      },
      {
        proizvodjac: "matis",
        img: "numero-radni-sto",
        naziv: "numero radni sto",
        favorite: false,
      },
    ],
  }),
  getters: {},
  actions: {},
});
