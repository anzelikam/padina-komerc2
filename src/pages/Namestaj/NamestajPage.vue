<template>
  <page>
    <div>
      <pageHeader>
        <template #buttons-left>
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
      </pageHeader>

      <pageBody class="bg-dark">
        <div class="text-center">
          <div class="= row text-center" style="margin-top: 50px">
            <div class="col-2"></div>

            <div class="col-8" style="max-width: 1600px">
              <h4 class="text-white">AMBIJENTI</h4>
              <h5 class="text-white">
                Veliki izbor nameštaja vrhunskih proizvođača
              </h5>

              <br />
              <div class="row justify-center">
                <router-link
                  to="/namestaj/kuhinje-i-trpezarije"
                  class="naziv_ambijenta text-white"
                >
                  <img
                    class="q-ma-md naziv_ambijenta_slika"
                    style="height: 170px; max-width: 300px"
                    src="/images/ambijenti/kuhinje_i_trpezarije.jpg"
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
                    src="/images/ambijenti/dnevne_sobe.jpg"
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
                    src="/images/ambijenti/spavace_sobe.jpg"
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
                    src="/images/ambijenti/decije_sobe.jpg"
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
                    src="/images/ambijenti/predsoblja.jpg"
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
                    src="/images/ambijenti/kancelarije.jpg"
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
                    src="/images/ambijenti/ostalo.jpg"
                  />
                  <p>ostalo</p>
                </router-link>
              </div>

              <br /><br />
            </div>

            <div class="col-2"></div>
          </div>
        </div>
      </pageBody>
    </div>
  </page>
</template>

<script setup></script>

<style>
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
