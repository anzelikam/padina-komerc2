import { defineStore } from "pinia";

export const useStoreOstalo = defineStore("ostalo", {
  state: () => ({
    proizvod: {},
    grupaProizvoda: {},
    // grupe proizvoda
    grupeProizvoda: [
      {
        grupa: "podneZidneObloge",
        slika: "/images/ostalo/grupe/podneZidneObloge.webp",
        imgPath: "/images/ostalo/podne_zidne_obloge/",
        naziv: "Podne i zidne obloge",

        vrste: [
          {
            slikaVrstapath: "brodski_pod/",
            slikaVrsta: "brodski-pod.webp",
            naziv: "brodski pod",
            opis: "Brodski pod, izrađen od suvog drveta, pogodan je za podne obloge, Dimenzije: 4000 x 116 x 19mm. Pakovanje se sastoji od 2,784 m2.",
          },
          {
            slikaVrstapath: "eko_ploce/",
            slikaVrsta: "eko-ploce.webp",
            naziv: "eko ploče",
            opis: "Vodootporna eko-ploča je građevinski materijal,koji se sastoji od delića recikliranog tetrapaka.Dimenyija table: 2200 x 1150.",
          },
          {
            slikaVrstapath: "laminati/",
            slikaVrsta: "laminati.webp",
            opis: "U ponudi ima različitih dekora i debljina laminata. Ponudu ja najbolje videti na licu mesta, pa peporučujemo posetu salonu. ",
            naziv: "laminati",
          },

          {
            slikaVrstapath: "laminat_lajsne/",
            slikaVrsta: "laminat-lajsna.webp",
            opis: "Ima različitih dezena lajsni, koji se lako uklapaju sa dezenima laminata, a takođe ima i prateća oprema za lajsne, kao što su uglovi, nastavci i završeci.",
            naziv: "laminat lajsna",
          },
          {
            slikaVrstapath: "lamperija/",
            slikaVrsta: "lamperija.webp",
            opis: "Lamperija, izrađena od suvog drveta, sjajan je proizvod za zidne i plafonske obloge. DImenzije: 4000 x 96 x 12.5mm. Pakovanje se sastoji od 3.84 m2",
            naziv: "lamperija",
          },
          {
            slikaVrstapath: "prelazne_lajsne/",
            slikaVrsta: "aluminijumska-lajsna.webp",
            opis: "U ponudi ima veliki izbor prelaznih aluminijumskih lajsni.",
            naziv: "aluminijumska lajsna",
          },
          {
            slikaVrstapath: "zidne_obloge/",
            slikaVrsta: "zidne-obloge.webp",
            opis: "Dekorativni PVC zidni paneli u ponudi ima u različitm dezenima: od mermera, cigle, drveta...Dimenzije su 2700 x 250mm. Pakovanje se sastoji od 2,7 m2.",
            naziv: "Zidne obloge",
          },
        ],
      },
      {
        grupa: "rasveta",
        slika: "/images/ostalo/grupe/rasveta.webp",
        imgPath: "/images/ostalo/rasveta/",
        naziv: "Rasveta",
        opis: "Nudimo veliki izbor lustera. Ponuda lustera se sa svakom novom isporukom menja, tako da je najbolje da posetite salon i pogledate aktuelnu ponudu.",
        vrste: [
          {
            slikaVrstapath: "rasveta/",
            slikaVrsta: "rasveta.webp",
            naziv: "",
          },
        ],
      },
      {
        grupa: "lexan",
        slika: "/images/ostalo/grupe/lexan.webp",
        imgPath: "/images/ostalo/lexan/",
        naziv: "Lexan",
        opis: "Lexan držimo na stanju i seče se na meru. U ponudi ima transparentan (providan) i bronza i to u debljinama 4mm, 6mm, 8mm, 10mm. Uz lexan idu i završne lajsne, zaptivna traka, i lajsne za spajanje. Dimenzija cele table je 6000 x 2100 cm.",
        vrste: [
          {
            slikaVrstapath: "lexan/",
            slikaVrsta: "lexan-providni.webp",
            naziv: "",
          },
        ],
      },
      {
        grupa: "tehnikaZaKuhinju",
        slika: "/images/ostalo/grupe/tehnikaZaKuhinju.webp",
        imgPath: "/images/ostalo/tehnika_za_kuhinju/",
        naziv: "Tehnika za kuhinju",
        opisGrupe:
          "Nudimo veliki izbor tehnike za kuhinju raznih proizvođača, kako ugradne tako i samostojeće. Kod nas možete kupiti šporet, rernu, mikrotalasnu rernu, frižider, mašinu za sudove, itd... ",
        vrste: [
          {
            slikaVrstapath: "aspiratori/",
            slikaVrsta: "aspirator-gorenje-kaminski.webp",
            naziv: "aspirator",
          },
          {
            slikaVrstapath: "frizideri/",
            slikaVrsta: "frizider-samsung.webp",
            naziv: "frižider",
          },
          {
            slikaVrstapath: "grejne_ploce/",
            slikaVrsta: "indukcijska-grejna-ploca.webp",
            naziv: "indukcijska grejna ploča",
          },
          {
            slikaVrstapath: "mikrotalasne/",
            slikaVrsta: "mikrotalasna.webp",
            naziv: "mikrotalasna rerna",
          },
          {
            slikaVrstapath: "sporet/",
            slikaVrsta: "gorenje-el-sporet.webp",
            naziv: "električni šporet gorenje",
          },
          {
            slikaVrstapath: "sudomasina/",
            slikaVrsta: "gorenje-sudomasina.webp",
            naziv: "sudomašina",
          },
          {
            slikaVrstapath: "ugradna_rerna/",
            slikaVrsta: "ugradna-rerna.webp",
            naziv: "ugradna rerna",
          },
        ],
      },
      {
        grupa: "sudopere",
        slika: "/images/ostalo/grupe/sudopera-1.webp",
        imgPath: "/images/ostalo/sudopere/",
        naziv: "Sudopere",
        opisGrupe:
          "U ponudi imamo različite modele sudopera, od inox do granitnih materijala. Naši saradnici-proizvođači sudopera su Alveus i Metalac. Takođe ima i prateća oprema za sudopere kao što su slavine, sifoni, dozeri za deterdžente, oceđivači, daske, sredstva za održavanje sudopera,itd... ",

        vrste: [
          {
            slikaVrstapath: "sudopere/",
            slikaVrsta: "sudopera-1.webp",
            naziv: "sudopera-1",
            opis: "",
          },
          {
            slikaVrstapath: "sudopere/",
            slikaVrsta: "sudopera-2.webp",
            naziv: "sudopera-2",
          },
          {
            slikaVrstapath: "sudopere/",
            slikaVrsta: "sudopera-3.webp",
            naziv: "sudopera-3",
          },
          {
            slikaVrstapath: "sudopere/",
            slikaVrsta: "sudopera-4.webp",
            naziv: "sudopera-4",
          },
          {
            slikaVrstapath: "sudopere/",
            slikaVrsta: "sudopera-5.webp",
            naziv: "sudopera-5",
          },
          {
            slikaVrstapath: "slavine/",
            slikaVrsta: "slavina-1.webp",
            naziv: "slavina-1",
          },
          {
            slikaVrstapath: "slavine/",
            slikaVrsta: "slavina-2.webp",
            naziv: "slavina-2",
          },
          {
            slikaVrstapath: "slavine/",
            slikaVrsta: "slavina-3.webp",
            naziv: "slavina-3",
          },
        ],
      },
      {
        grupa: "garnišne",
        slika: "/images/ostalo/grupe/garnisne.webp",
        imgPath: "/images/ostalo/garnisne/",
        naziv: "Garnišne",
        opisGrupe:
          "U ponudi su različiti modeli garnišni, kao što su plafonske sa ukrasnom maskom i bez nje, drvene garnišne, i metalne u različitim bojama.",
        vrste: [
          {
            slikaVrstapath: "drvene/",
            slikaVrsta: "drvene-garnisne.webp",
            naziv: "drvene garnišne",
          },
          {
            slikaVrstapath: "aluminijumske/",
            slikaVrsta: "aluminijumske-garnisne-plafonske.webp",
            naziv: "aluminijumske garnišne - plafonske",
          },
          {
            slikaVrstapath: "metalne/",
            slikaVrsta: "metalne-garnisne-zidne.webp",
            naziv: "metalne garnišne - zidne",
          },
          {
            slikaVrstapath: "pvc/",
            slikaVrsta: "pvc-garnisne-i-elementi.webp",
            naziv: "pvc garnišne i elementi",
          },
          {
            slikaVrstapath: "vitraze/",
            slikaVrsta: "vitraze.webp",
            naziv: "vitraže",
          },
        ],
      },
    ],
  }),
  actions: {
    selectedGrupa(grupaProizvoda) {
      this.grupaProizvoda = grupaProizvoda;
    },
    selectedProizvod(proizvod) {
      this.proizvod = proizvod;
    },
  },
  getters: {},
});
