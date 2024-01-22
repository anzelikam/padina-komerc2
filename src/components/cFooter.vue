<template>
  <div class="bg-dark">
    <div class="row" style="margin-top: 50px">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="row">
          <div class="col-md-4 col-sm-12 col-xs-12">
            <div style="margin-left: 50px; margin-bottom: 10px">
              <q-icon name="info_outline" color="positive" size="25px" />
            </div>
            <div class="text-positive">
              <p style="font-size: 16px">
                Salon nameštaja<br />
                PADINA KOMERC DOO<br /><br />
              </p>
              <p class="basic_info">
                <i class="fa fa-map-marker"></i> Lenjinova 18, 26215 PADINA<br />
                <i class="fa fa-phone"></i> 013 667-275<br />
                <i class="fa fa-mobile"></i> 063 278-450<br />
                <i class="fa fa-mobile"></i> Štaub Ružena 063 278-430<br />
                <i class="fa fa-mobile"></i> Štaub Pavel 063 278-380<br />
                <i class="fa fa-envelope"></i>
                <a
                  href="mailto:padinakomerc.namestaj@gmail.com"
                  style="text-decoration: none"
                >
                  padinakomerc.namestaj@gmail.com</a
                >
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <div style="margin-left: 50px; margin-bottom: 10px">
              <q-icon name="schedule" color="positive" size="25px" />
            </div>
            <p class="text-positive basic_info">
              Radno vreme: 08:00-16:00<br />
              subotom: 08:00-14:00<br />
              nedeljom: zatvoreno
            </p>
            <br />
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <div style="margin-left: 50px; margin-bottom: 10px">
              <q-icon name="store" color="positive" size="25px" />
            </div>
            <p class="text-positive basic_info">
              Prodajna mesta: <br />
              Padina, Lenjinova 18<br />
              +381 13 667275<br />
            </p>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
    <br /><br />
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="text-positive basic_info">
          <p>&copy; 2023 Padina Komerc</p>
        </div>

        <a href="#" class="social fa fa-twitter text-positive q-ma-xs"></a>
        <a
          href="https://sr-rs.facebook.com/padinakomerc.namestaj/"
          target="_blank"
          class="social fa fa-facebook text-positive"
        ></a>
        <a
          href="https://www.youtube.com/watch?v=75cbGjszI4w"
          target="_blank"
          class="social fa fa-youtube text-positive q-ma-xs"
        ></a>
        <a href="#" class="social fa fa-instagram text-positive q-ma-xs"></a>
      </div>

      <div class="col-1"></div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.social {
  font-size: 30px;
  width: 50px;
  text-decoration: none;
}
.social:hover {
  opacity: 0.4;
}
.basic_info {
  font-size: 16px;
}
</style>
