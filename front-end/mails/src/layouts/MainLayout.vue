<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-white text-white">
      <q-toolbar>
        <q-toolbar-title>
            <img class="logo" src="../assets/logo.png">
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
.logo {
  width: 8%!important;
  height: 8%!important;
  margin-top: 2vh;
  margin-left: 1vh;
}
.text-lgs1 {
  color:#1c9cdc;
}
.bg-lgs1 {
  background-color: #1c9cdc;
}
.text-lgs2 {
  color:#c4d404;
}
.bg-lgs2 {
  background-color: #c4d404;
}
.text-lgs3 {
  color:#ac044c;
}
.bg-lgs3 {
  background-color: #ac044c;
}
</style>
