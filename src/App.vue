<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created() {
    //get albums
    this.$store.dispatch('example/fetchAlbums');
    this.$store.dispatch('example/fetchUsers');
    this.$store.dispatch('example/fetchPhotos');

  },
}
</script>

<style lang="scss">
  * {
    text-decoration: none;
  }

  .hover__link {
    color: $dark;
    transition: color 150ms linear;
    &:hover {
      color: $primary !important;
    }
  }
</style>