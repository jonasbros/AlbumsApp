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
          class="desktop__tabs"
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

        <q-btn 
          icon="menu"
          flat
          @click="mobileDrawer = !mobileDrawer"
          class="mobile__menu"
        />
      </q-toolbar>
    </q-header>
    
    <q-drawer
      v-model="mobileDrawer"
      :width="300"
      :breakpoint="1024"
      overlay
      bordered
      side="right"
      class="mobile__drawer"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item-label header>Album App</q-item-label>

          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="bookmark" />
            </q-item-section>
            <q-item-section>
              <router-link :to="{ name: 'albums' }" class="hover__link">
                Albums
              </router-link>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="account_circle" />
            </q-item-section>
            <q-item-section>
              <router-link :to="{ name: 'users' }" class="hover__link">
                Users
              </router-link>
            </q-item-section>
          </q-item>

        </q-list>        
      </q-scroll-area>
    </q-drawer>

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
      mobileDrawer: false
    }
  },
}
</script>

<style lang="scss">
  .q-header, .q-toolbar {
    height: 75px;
  }

  .desktop__tabs {
    
    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }

  .mobile__drawer, .mobile__menu {
    @media only screen and (min-width: 1024px) {
      display: none;
    }
  }
</style>
