<template>
  <q-card class="my-card" :key="album.id">
    <router-link 
      :to="{ 
        name: 'album', 
        params: { albumTitle: album.title, albumId: album.id, userId: album.userId }
      }"
      style="display: inline-block; max-width: 100%; width: 100%;"
    >
      <img 
        :src="thumbnailUrl"
        style="max-width: 100%; width: 100%;"
      >
    </router-link>

    <q-card-section>
      <!-- album title -->
      <router-link 
        :to="{ 
          name: 'album', 
          params: { albumTitle: album.title, albumId: album.id, userId: album.userId }
        }"
        class="text-h6 hover__link"
      >
        {{ album.title }}
      </router-link>
      
      <!-- user name -->
      <div class="text-subtitle2" v-if="!fromUserPage">
        by
        <router-link 
          :to="{ name: 'user', params: { userId: album.userId } }"
          class="hover__link"
        >
          {{ getAlbumUserName(album.userId) }}
        </router-link>
      </div>

      <q-card-actions align="right" v-if="fromUserPage">
        <q-btn 
          :to="{ name: 'albumEdit', params: { albumTitle: album.title, albumId: album.id, userId: album.userId } }"
          flat 
          round color="primary"
          icon="edit"
          label="Edit"
        />

        <q-btn 
          flat 
          round 
          color="red" 
          icon="delete" 
          label="Delete"
          @click="albumCardDialog = true"
        />
      </q-card-actions>
    </q-card-section>

    <q-dialog
      v-model="albumCardDialog"
    >
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete Album</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Are you sure you want to delete this album?
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="Delete" text-color="negative" v-close-popup @click="deleteAlbum(album.id)"/>
          <q-btn flat label="Cancel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script>
export default {
  name: 'AlbumCard',
  props: 
  {
    album: Object,
    fromUserPage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      albumCardDialog: false,
      thumbnailUrl: '',
    }
  },
  computed: {
    users() {
      return this.$store.getters['example/getUsers'];
    },
    photos() {
      return this.$store.getters['example/getPhotos'];
    },
  },
  mounted() {
    setTimeout(() => {
        this.getAlbumThumbnail();
    }, 250);
  },
  methods: {
    deleteAlbum(albumId) {
      this.$store.commit('example/deleteAlbum', albumId);
    },
    //get user info for each album
    getAlbumUserName(userId) {
      let albumUser = this.users.filter((user) => {
        return userId == user.id;
      });
      
      return albumUser[0].name;
    },
    //get first photo in album as album thumbnail
    getAlbumThumbnail() {
      let albumThumbnail = this.photos.filter((photo) => {
        return this.album.id == photo.albumId;
      });
      this.thumbnailUrl = albumThumbnail[0].thumbnailUrl;
    }
  },
}
</script>
