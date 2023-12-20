<template>
  <div>
    <page>
      <pageHeader>
        <template #buttons-left>
          <!-- <pageHeaderBtnBack label="Home"></pageHeaderBtnBack> -->
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
      </pageHeader>
      <pageBody>
        <div>
          <!-- <div>
            <p>
              Otkrijte širok izbor stilskog i izdržljivog namještaja u Padina
              komerc. Oplemenite svoj životni prostor već danas!
            </p>
            <p>Unaprijedite svoj dom namještajem po meri</p>
          </div> -->
          <div class="homePageCont text-center row">
            <div class="col-2"></div>
            <div class="col-8" style="max-width: 1600px">
              <h5 class="text-dark text-center">
                Nameštaj po meri napravljen u našoj radionici
              </h5>
              <div>
                <p>
                  Otkrijte širok izbor stilskog i izdržljivog namještaja u
                  Padina komerc. Oplemenite svoj životni prostor već danas!
                </p>
              </div>
              <div class="flex flex-center">
                <img
                  class="q-ma-md"
                  style="height: 170px; max-width: 300px"
                  src="/images/homePage.jpg"
                />
                <img
                  class="q-ma-md"
                  style="height: 170px; max-width: 300px"
                  src="/images/homePage.jpg"
                />
                <img
                  class="q-ma-md"
                  style="height: 170px; max-width: 300px"
                  src="/images/homePage.jpg"
                />
              </div>
            </div>

            <div class="col-2"></div>
          </div>
        </div>
      </pageBody>
    </page>
  </div>
</template>

<script setup></script>
