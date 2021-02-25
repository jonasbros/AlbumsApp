<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-8 col-xs-10">

        <h1 class="text-h2 text-center text-bold">
          Photos from {{ albumTitle }}
        </h1>

        <p class="text-h4 text-center" v-if="albumUserName">
          By 
          <router-link :to="{ name: 'user', params: { userId: userId} }" class="hover__link">
            {{ albumUserName }}
          </router-link>
        </p>  
      </div>
    </div>

    <div class="row justify-center" v-if="$route.name == 'albumEdit'">
      <q-btn color="primary" icon="add_a_photo" label="Add Photo" @click="openDialog()"/>
    </div>
    
    <div class="albums__container q-pa-md row items-start justify-center q-gutter-md" v-if="albumPhotos">
      <div class="col-xs-12 col-sm-4 col-md-3 col-lg-4 col-xl-4" v-for="photo in albumPhotos" :key="photo.id">
        <PhotoCard :photo="photo" @edit-photo="openDialog"/>
      </div>
    </div>

    <AddEditPhotoDialog :editPhoto="editPhotoInfo" :addEditDialog="addEditDialog" @close-dialog="addEditDialog = false"/>
  </q-page>
</template>

<script>
import PhotoCard from 'components/PhotoCard';
import AddEditPhotoDialog from 'components/AddEditPhotoDialog';
import axios from 'axios';

export default {
  name: 'Album',
  components: {
    PhotoCard,
    AddEditPhotoDialog
  },
  data() {
    return {
      albumTitle: this.$route.params.albumTitle,
      albumId: this.$route.params.albumId,
      userId: this.$route.params.userId,
      addEditDialog: false,
      editPhotoInfo: null,
      albumUserName: '',
      albumPhotos: [],
    }
  },
  mounted() {
    this.getAlbumUserName();
    this.getAlbumPhotos();
  },
  methods: {
    openDialog(photo = null) {
      this.editPhotoInfo = photo;
      this.addEditDialog = true;
    },
    getAlbumUserName() {
        axios
        .get(`https://jsonplaceholder.typicode.com/users/${this.userId}/`)
        .then((response) => {
          this.albumUserName = response.data.name;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAlbumPhotos() {
        axios
        .get(`https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos`)
        .then((response) => {
          this.albumPhotos = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }


}
</script>

<style lang="scss">
  .text-h2 {
    @media only screen and (max-width: 1024px) {
      font-size: 2.875rem;
      line-height: 2.875rem;
    }
  }
</style>