<template>
  <q-card class="my-card">
    <img :src="photo.url">

    <q-card-section>
      <div class="text-h6">{{ photo.title }}</div>
    </q-card-section>

    <!-- actions -->
    <q-card-actions align="right" v-if="$route.name == 'albumEdit'">
      <q-btn 
        flat 
        color="primary" 
        icon="edit" 
        @click="$emit('edit-photo', photo)"
        label="Edit"
      />
      <q-btn 
        flat 
        color="red" 
        icon="delete" 
        @click="deletePhotoDialog = true"
        label="Delete"
      />
    </q-card-actions>

    <!-- delete confirmation -->
    <q-dialog
      v-model="deletePhotoDialog"
    >
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete Photo</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Are you sure you want to delete this photo?
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="Delete" text-color="negative" v-close-popup @click="deletePhoto()"/>
          <q-btn flat label="Cancel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</q-card>


</template>

<script>
export default {
  name: 'PhotoCard',
  props: ['photo'],
  data() {
    return {
      deletePhotoDialog: false
    }
  },
  methods: {
    deletePhoto() {
      this.$store.commit('example/deletePhoto', this.photo);
      this.$emit('photo-deleted', this.photo);
    }
  }
}
</script>
