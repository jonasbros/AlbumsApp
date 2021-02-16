<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="shadow-1">
      <q-toolbar class="text-white shadow-2">
        <router-link
          :to="{ name: 'albums' }"
          class="text-h5 text-white text-bold"
        >
          Albums App
        </router-link>
        <q-space />

        <q-tabs
          v-model="navBtnActive"
          inline-label
        >
          <q-route-tab 
            :to="{ name: 'albums' }"
            icon="book"
            label="Albums"
          />
          <q-route-tab 
            :to="{ name: 'users' }"
            icon="account_circle"
            label="Users"
          />
        </q-tabs>
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
  components: {  },
  data () {
    return {
      navBtnActive: 'albums',
    }
  }
}
</script>

<style lang="scss">
  .q-header, .q-toolbar {
    height: 75px;
  }
</style>
