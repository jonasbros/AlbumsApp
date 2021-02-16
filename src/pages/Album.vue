<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-8">
        <h1 class="text-h2 text-center text-bold">Photos from {{ albumTitle }}</h1>
        <p class="text-h4 text-center">
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
    
    <div class="albums__container q-pa-xl row items-start justify-center q-gutter-md">
      <div class="col-3" v-for="photo in albumPhotos" :key="photo.id">
        <PhotoCard :photo="photo" @edit-photo="openDialog"/>
      </div>
    </div>

    <AddEditPhotoDialog :editPhoto="editPhotoInfo" :addEditDialog="addEditDialog" @close-dialog="addEditDialog = false"/>
  </q-page>
</template>

<script>
import PhotoCard from 'components/PhotoCard';
import AddEditPhotoDialog from 'components/AddEditPhotoDialog';

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
    }
  },
  computed: {
    users() {
      return this.$store.getters['example/getUsers'];
    },
    albumPhotos() {
      let photos = this.$store.getters['example/getPhotos'];

      return photos.filter((photo) => {
        return this.albumId == photo.albumId;
      });
    },
    albumUserName() {
      let user =  this.users.filter((user) => {
        return this.userId == user.id;
      });

      return user[0].name;
    },
  },
  methods: {
    openDialog(photo = null) {
      this.editPhotoInfo = photo;
      this.addEditDialog = true;
    }
  }


}
</script>
