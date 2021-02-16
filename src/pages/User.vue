<template>
  <q-page padding>
    <div class="row justify-center">
      <q-card class="my-card col-md-6 col-sm-8 col-xs-10">
        <q-card-section>
          <div class="row items-center justify-start">
            <q-avatar 
              color="primary" 
              text-color="white" 
              icon="person" 
              class="q-mr-sm"
            />

            <div>
              <div class="col text-h6 ellipsis">
                {{ user.name }}
              </div>
              <div class="text-subtitle2">
                {{ user.email }}
              </div>  
            </div>   
          </div>
  
        </q-card-section>

        <q-card-section>
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

    <h2 class="text-center text-h4">Albums</h2>

    <div class="albums__container row items-start justify-center q-gutter-md q-mt-md">
      <div class="col-xs-10 col-sm-4 col-md-3 col-lg-3 col-xl-3" v-for="album in userAlbums" :key="album.id">
        <AlbumCard :album="album" :fromUserPage="true"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import AlbumCard from 'components/AlbumCard';

export default {
  name: 'User',
  components: {
    AlbumCard
  },
  computed: {
    user() {
      let user = this.$store.getters['example/getUsers'].filter((user) => {
        return this.$route.params.userId == user.id;
      });
      
      return user[0];
    },
    userAlbums() {
      let userAlbums = this.$store.getters['example/getAlbums'].filter((album) => {
        return this.$route.params.userId == album.userId;
      });

      return userAlbums;
    },
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