import { defineStore } from "pinia";
import { useStorePodgrupaAmbijenta } from "./storePodgrupaAmbijenta";

const storePodgrupaAmbijenta = useStorePodgrupaAmbijenta();

export const useStoreOmiljeno = defineStore("omiljeno", {
  state: () => ({
    omiljeniProizvodi: [],
    favorite: false,
  }),
  actions: {
    addOmiljeniProizvod(
      proizvod,
      podgrupaAmbijentaImagePath,
      podgrupaAmbijentaNaziv,
      imageExt
    ) {
      const omiljeniProizvod = {
        proizvodjac: proizvod.proizvodjac,
        img: proizvod.img,
        naziv: proizvod.naziv,
        imagePath: podgrupaAmbijentaImagePath,
        podgrupaAmbijentaNaziv: podgrupaAmbijentaNaziv,
        imageExt: imageExt,
        favorite: true,
      };

      // Create a Set with unique objects
      const uniqueOmiljeniProizvodi = new Set(
        this.omiljeniProizvodi.map(JSON.stringify)
      );

      // Add the new object to the Set
      uniqueOmiljeniProizvodi.add(JSON.stringify(omiljeniProizvod));

      // Convert the Set back to an array of unique objects
      this.omiljeniProizvodi = Array.from(uniqueOmiljeniProizvodi, JSON.parse);

      console.log("this.omiljeniProizvodi", this.omiljeniProizvodi);
      localStorage.setItem("omiljeno", JSON.stringify(this.omiljeniProizvodi));
    },
    // addOmiljeniProizvod(
    //   proizvod,
    //   podgrupaAmbijentaImagePath,
    //   podgrupaAmbijentaNaziv,
    //   imageExt
    // ) {
    //   const omiljeniProizvod = {
    //     proizvodjac: proizvod.proizvodjac,
    //     img: proizvod.img,
    //     naziv: proizvod.naziv,
    //     imagePath: podgrupaAmbijentaImagePath,
    //     podgrupaAmbijentaNaziv: podgrupaAmbijentaNaziv,
    //     imageExt: imageExt,
    //     favorite: true,
    //   };
    //   this.omiljeniProizvodi.push(omiljeniProizvod);

    //   console.log("this.omiljeniProizvodi", this.omiljeniProizvodi);
    //   localStorage.setItem("omiljeno", JSON.stringify(this.omiljeniProizvodi));
    // },

    deleteOmiljeniProizvod(index, proizvod) {
      console.log("proizvod to delete", proizvod);

      this.omiljeniProizvodi.splice(index, 1);
      localStorage.setItem("omiljeno", JSON.stringify(this.omiljeniProizvodi));
    },

    getOmiljeniProizvodiFromLocalS() {
      const omiljeniProizvodi = localStorage.getItem("omiljeno");

      if (!omiljeniProizvodi) {
        omiljeniProizvodi == [];
      } else {
        this.omiljeniProizvodi = JSON.parse(omiljeniProizvodi);
      }
    },
  },
  getters: {},
});
