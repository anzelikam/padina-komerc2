<template>
  <page>
    <!-- <pageHeader>
      <template #buttons-left>
        <mainHeader></mainHeader>
        <q-btn
          to="home"
          icon="chevron_left"
          color="primary"
          label="Početna"
          flat
          rounded
          dense
          no-caps
        ></q-btn>
      </template>

      <template #title>Nameštaj</template>
    </pageHeader> -->
    <mainHeader></mainHeader>

    <pageBody class="bg-dark">
      <breadCrumbs></breadCrumbs>
      <div class="row text-center">
        <div class="col-2"></div>

        <div class="col-8" style="max-width: 1600px">
          <h5 class="text-white">AMBIJENTI</h5>
          <p class="text-grey text-h6">
            Veliki izbor nameštaja vrhunskih proizvođača
          </p>
          <div class="row justify-center">
            <router-link
              to="/namestaj/kuhinje-i-trpezarije"
              class="naziv_ambijenta text-white"
            >
              <img
                class="q-ma-md naziv_ambijenta_slika"
                style="height: 170px; max-width: 300px"
                src="/images/ambijenti/kuhinje_i_trpezarije.webp"
              />
              <p>kuhinje i trpezarije</p>
            </router-link>

            <router-link
              to="/namestaj/dnevne-sobe"
              class="naziv_ambijenta text-white"
            >
              <img
                class="q-ma-md naziv_ambijenta_slika"
                style="height: 170px; max-width: 300px"
                src="/images/ambijenti/dnevne_sobe.webp"
              />
              <p>dnevne sobe</p>
            </router-link>

            <router-link
              to="/namestaj/spavace-sobe"
              class="naziv_ambijenta text-white"
            >
              <img
                class="q-ma-md naziv_ambijenta_slika"
                style="height: 170px; max-width: 300px"
                src="/images/ambijenti/spavace_sobe.webp"
              />
              <p>spavaće sobe</p>
            </router-link>

            <router-link
              to="/namestaj/decije-sobe"
              class="naziv_ambijenta text-white"
            >
              <img
                class="q-ma-md naziv_ambijenta_slika"
                style="height: 170px; max-width: 300px"
                src="/images/ambijenti/decije_sobe.webp"
              />
              <p>dečije sobe</p>
            </router-link>
            <router-link
              to="/namestaj/predsoblja"
              class="naziv_ambijenta text-white"
            >
              <img
                class="q-ma-md naziv_ambijenta_slika"
                style="height: 170px; max-width: 300px"
                src="/images/ambijenti/predsoblja.webp"
              />
              <p>predsoblja</p>
            </router-link>
            <router-link
              to="/namestaj/kancelarije"
              class="naziv_ambijenta text-white"
            >
              <img
                class="q-ma-md naziv_ambijenta_slika"
                style="height: 170px; max-width: 300px"
                src="/images/ambijenti/kancelarije.webp"
              />
              <p>kancelarije</p>
            </router-link>

            <router-link
              to="/namestaj/ostalo"
              class="naziv_ambijenta text-white"
            >
              <img
                class="q-ma-md naziv_ambijenta_slika"
                style="height: 170px; max-width: 300px"
                src="/images/ambijenti/ostalo.webp"
              />
              <p>ostalo</p>
            </router-link>
          </div>

          <br /><br />
        </div>

        <div class="col-2"></div>
      </div>
    </pageBody>
  </page>
</template>

<script setup></script>

<style scoped>
.naziv_ambijenta {
  border: 1px solid #091d34;
  border-radius: 5px;
  text-transform: uppercase;
  text-decoration: none;
  margin: 2px;
}
.naziv_ambijenta:hover {
  border: 1px solid white;
}
.naziv_ambijenta_slika {
  border-radius: 5px;
}
</style>
