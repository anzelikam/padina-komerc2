<template>
  <div>
    <page>
      <!-- <pageHeader>
        <template #buttons-left>
          <mainHeader></mainHeader>
          <q-btn
            to="/home"
            icon="chevron_left"
            color="primary"
            label="Početna"
            flat
            rounded
            dense
            no-caps
          ></q-btn>
        </template>
        <template #title>Nameštaj po meri</template>
      </pageHeader> -->
      <mainHeader></mainHeader>
      <pageBody class="bg-dark">
        <div class="homePageCont text-center row">
          <div class="col-2"></div>
          <div class="col-8" style="max-width: 1600px">
            <h4 class="text-white text-center">
              Nameštaj po meri napravljen u našoj radionici
            </h4>
            <div>
              <p class="text-white">
                Dođite da zajedno pronađemo rešenje, koje će odgovarati vašem
                ukusu, potrebama i raspoloživom prostoru u vašem domu.
              </p>
            </div>
            <div class="flex flex-center">
              <galerija></galerija>
            </div>
          </div>

          <div class="col-2"></div>
        </div>
      </pageBody>
    </page>
  </div>
</template>

<script setup>
import galerija from "../../components/proizvodnja/galerijaNasihProizvoda.vue";
</script>
