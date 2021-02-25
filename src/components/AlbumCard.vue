<template>
  <q-card class="my-card" :key="album.id">
    <router-link
      v-if="thumbnailUrl" 
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
      <div class="text-subtitle2" v-if="!fromUserPage && albumUserName">
        by
        <router-link 
          :to="{ name: 'user', params: { userId: album.userId } }"
          class="hover__link"
        >
          {{ albumUserName }}
        </router-link>
      </div>

      <q-card-actions align="right" v-if="fromUserPage">
        <q-btn 
          :to="{ name: 'albumEdit', params: { albumTitle: album.title, albumId: album.id, userId: album.userId } }"
          flat 
          color="primary"
          icon="edit"
          label="Edit"
        />

        <q-btn 
          flat 
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
import axios from 'axios';

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
      albumUserName: '',
    }
  },
  mounted() {
    this.getAlbumUserName();
    this.getAlbumThumbnail();
  },
  methods: {
    deleteAlbum(albumId) {
      this.$store.commit('example/deleteAlbum', albumId);
    },
    //get user info for each album
    getAlbumUserName() {
      axios
      .get(`https://jsonplaceholder.typicode.com/users/${this.album.userId}/`)
      .then((response) => {
        this.albumUserName = response.data.name;
      })
      .catch((error) => {
        console.log(error);
      });
    },
    //get first photo in album as album thumbnail
    getAlbumThumbnail() {
      axios
      .get(`https://jsonplaceholder.typicode.com/albums/${this.album.id}/photos`)
      .then((response) => {
        this.thumbnailUrl = response.data[0].thumbnailUrl;
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
  
}
</script>
