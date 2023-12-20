<template>
  <q-header style="background: white">
    <q-toolbar class="text-center">
      <!-- <router-link to="/" >
          <img src="logo/logo-padinakomerc.png" class="q-mb-sm" />
        </router-link> -->
      <q-toolbar-title>
        <router-link to="/">
          <img src="logo/logo-padinakomerc.png" class="q-mb-sm" />
        </router-link>
      </q-toolbar-title>

      <q-toolbar-title>
        <div class="toggleNavButtons">
          <q-btn
            :ripple="false"
            flat
            :class="$route.path === '/namestaj' ? 'active' : 'nonActive'"
            label="Nameštaj"
            to="/namestaj"
          />
          <q-btn
            :ripple="false"
            flat
            :class="
              $route.path === '/namestaj-po-meri' ? 'active' : 'nonActive'
            "
            label="Nameštaj po meri"
            to="/namestaj-po-meri"
          />
          <q-btn
            :ripple="false"
            flat
            :class="$route.path === '/o-nama' ? 'active' : 'nonActive'"
            label="O nama"
            to="/o-nama"
          />
        </div>
      </q-toolbar-title>
      <q-toolbar-title>
        <q-btn
          class="toggleMenuButton"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
        />
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["openDrawer"]);

function handleToggleLeftDrawer() {
  emit("openDrawer");
}
</script>

<style>
.nonActive {
  color: #454140;
}
.active {
  color: #9b0000;
}

.toggleMenuButton {
  float: right;
  display: block;
}
.toggleNavButtons {
  display: none;
}

@media screen and (min-width: 700px) {
  .toggleMenuButton {
    display: none;
  }
  .toggleNavButtons {
    display: block;
  }
}
/* radial-gradient(circle, #35a2ff 0%, #014a88 100%) */
</style>
