<template>
  <q-page padding>
    <h1 class="text-h2 text-bold text-center">All Albums</h1>
    <div class="albums__container q-pa-xl row items-start justify-center q-gutter-md">
        <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3" v-for="album in albums" :key="album.id">
          <AlbumCard :album="album"/>
        </div>
    </div>
  </q-page>
</template>

<script>
import AlbumCard from 'components/AlbumCard';
export default {
  components: {
    AlbumCard,
  },
  computed: {
    albums() {
      return this.$store.getters['example/getAlbums'];
    },
  }
}
</script>