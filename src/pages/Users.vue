<template>
  <q-page padding>
    <div class="row justify-center q-pa-sm">
      <div class="col-xs-12 col-sm-8 col-md-5 col-lg-5 col-xl-5">

        <div class="shadow-1" style="max-width: 100%">
          <q-list bordered padding>
            <UserListItem :user="user" v-for="user in users" :key="user.id"/>
          </q-list>
        </div>

      </div>

    </div>
  </q-page>
</template>

<script>
import UserListItem from 'components/UserListItem';
import axios from 'axios';

export default {
  name: 'Users',
  components: {
    UserListItem
  },
  data() {
    return {
      users: null,
    }
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers(){
      axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<style lang="scss">
  .user-item__container:last-of-type .q-separator {
    display: none;
  }

  .q-list {
    background-color: #FFF;
  }
</style>