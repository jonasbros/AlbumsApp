<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('example/fetchAlbums');
    this.$store.dispatch('example/fetchUsers');
    this.$store.dispatch('example/fetchPhotos');
  },
}
</script>