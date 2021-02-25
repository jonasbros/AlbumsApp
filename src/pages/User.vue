<template>
  <q-page padding>
    <div class="row justify-center q-mt-md">
      <q-card class="my-card col-md-6 col-sm-8 col-xs-12">
        <q-card-section>
          <div class="row items-center justify-start">
            <q-avatar 
              color="primary" 
              text-color="white" 
              icon="person" 
              class="q-mr-sm"
            />

            <div>
              <div class="col text-h6 ellipsis" v-if="user">
                {{ user.name }}
              </div>
              <div class="text-subtitle2" v-if="user">
                {{ user.email }}
              </div>  
            </div>   
          </div>
  
        </q-card-section>

        <q-card-section v-if="user">
          <div class="text-subtitle2">
            {{ user.company.name }} | {{ user.company.catchPhrase }}
          </div>
          
          <div class="text-caption">
            {{ `${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}` }}
          </div>

          <div class="text-caption">
            {{ user.website }}
          </div>   
        </q-card-section>
      </q-card>
    </div>

    <h2 class="text-center text-bold text-h4 q-mb-none q-pb-none">
      Albums
    </h2>

    <div class="albums__container row items-start justify-center q-gutter-md q-mt-sm q-pt-none q-pl-md q-pr-md  ">
      <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xl-3" v-for="album in albums" :key="album.id">
        <AlbumCard :album="album" :fromUserPage="true"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import AlbumCard from 'components/AlbumCard';
import axios from 'axios';

export default {
  name: 'User',
  components: {
    AlbumCard
  },
  data() {
    return {
      user: null,
      albums: null
    }
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
      .get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.userId}/`)
      .then((response) => {
        this.user = response.data;
        this.getUserAlbums();
      })
      .catch((error) => {
        console.log(error);
      });
    },
    getUserAlbums() {
       axios
      .get(`https://jsonplaceholder.typicode.com/users/${this.user.id}/albums`)
      .then((response) => {
        this.albums = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .albums__container {
    @media only screen and (min-width: 1024px) {
      width: 70%;
      margin: 16px auto;
    }

  }

  .q-card__section:nth-child(2) {
    padding-top: 0;
  }
</style>