<template>
    <q-dialog
      v-model="addEditDialog"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
      @show="fillPhotoInfo()"
    >
      <q-card class="bg-primary text-white">

        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup @click="$emit('closeDialog')">
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="row justify-center">
            <h2 class="text-white text-bold">{{ addEditHeader }} photo</h2>
          </div>
          <div class="row justify-center">
            <q-form
              @submit.prevent="updateAlbum"
              class="q-gutter-md col-md-6 col-sm-10 col-xs-12"
            >
              <q-input
                filled
                bg-color="white"
                v-model="photoInfo.title"
                label="Photo Title *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-input
                filled
                bg-color="white"
                v-model="photoInfo.url"
                label="Photo Url *"
                lazy-rules
                type="url"
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-input
                filled
                bg-color="white"
                v-model="photoInfo.thumbnailUrl"
                label="Thumbnail Title *"
                lazy-rules
                type="url"
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
              
              <div>
                <q-btn 
                  :label="`${addEditHeader} photo`" 
                  type="submit" 
                  color="white" 
                  text-color="primary"
                  class="q-mr-sm"
                  v-close-popup
                  @click="reset()"
                />
                
                <q-btn 
                  label="Cancel" 
                  color="white" 
                  text-color="primary" 
                  v-close-popup 
                  @click="$emit('close-dialog')"
                />

              </div>
            </q-form>
          </div>

        </q-card-section>
      </q-card>
    </q-dialog>
</template>

<script>
export default {
  name: 'AddEdditPhotoDialog',
  props: {
    addEditDialog: {
      type: Boolean,
      default: false,
    },
    editPhoto: {
      type: Object,
      default: null,
    }
  },
  data () {
    return {
      photoInfo: {
        albumId: this.$route.params.albumId,
        id: '',
        title: '',
        url: '',
        thumbnailUrl: '',
      }

    }
  },
  computed: {
    photos() {
      return this.$store.getters['example/getPhotos']
    },
    addEditHeader() {
      return this.editPhoto ? 'Edit' : 'Add';
    }
  },
  methods: { 
    fillPhotoInfo() {
      if( this.editPhoto ) {
        this.photoInfo = {...this.editPhoto};
      }else {
        this.photoInfo = {
          albumId: this.$route.params.albumId,
          id: '',
          title: '',
          url: '',
          thumbnailUrl: ''
        }
      }
    },
    updateAlbum() {
      if( !this.editPhoto ) {
        //add photo
        this.photoInfo.id = this.photos.length + 1;
        this.$store.commit('example/addPhoto', this.photoInfo);
      }else {
        //edit photo
        this.$store.commit('example/editPhoto', this.photoInfo);
      }

    }
  }
}
</script>
