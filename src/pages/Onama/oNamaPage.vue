<template>
  <q-page>
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
      <template #title>O nama</template>
    </pageHeader>
    <pageBody>
      <div class="q-pa-lg">
        <!-- <div>Namestaj po meri</div> -->
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
            <!-- <h4 class="text-dark text-center">
              Nameštaj po meri napravljen u našoj radionici
            </h4> -->
            <div class="q-pa-md">
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
      <div class="q-pa-lg">
        <div>O nama</div>
        <div>
          <p>
            Padina komerc je salon namještaja koji se nalazi u Padini, Srbija.
            Naša misija je pružiti našim kupcima namještaj visoke kvalitete po
            pristupačnim cijenama. Vjerujemo da svatko zaslužuje imati udoban i
            moderan dom i nastojimo to učiniti stvarnošću za naše klijente. Naš
            tim je posvećen osiguravanju da svaki kupac ima pozitivno iskustvo
            kupnje s nama. Od trenutka kada uđete u našu trgovinu, dočekat će
            vas ljubazno i obrazovano osoblje koje je spremno pomoći vam u
            pronalaženju savršenog komada namještaja za vaš dom. Također nudimo
            usluge dostave i montaže kako bi proces bio što lakši i bez stresa.
            Posjetite nas u Padina komerc i dopustite nam da Vam pomognemo
            stvoriti dom Vaših snova. PADINA KOMERC je salon nameštaja a ujedno
            i porodična firma osnovana 1990.godine. Nalazimo se Padini, što je
            oko 35km od Pančeva. Svakim danom Vam uspešno pomažemo u opremanju
            Vašeg životnog i radnog prostora. Veliki izbor tapaciranog nameštaja
            (kaučevi, garniture, fotelje, trosedi, ležajevi...), pločastog
            nameštaja (američki plakari, ormari, komode, cipelari, radni
            stolovi, kompjuterski stolovi, kuhinje, tv komode...) kao i
            nameštaja po meri i zahtevu kupca.
          </p>
        </div>
      </div>
    </pageBody>
  </q-page>
</template>
