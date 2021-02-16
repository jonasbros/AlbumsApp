<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-5">
        <h1 class="text-h2 text-bold text-center">List of users</h1>
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

export default {
  name: 'Users',
  components: {
    UserListItem
  },
  computed: {
    users() {
      return this.$store.getters['example/getUsers'];
    },
  }
}
</script>

<style lang="scss">
  .user-item__container:last-of-type .q-separator {
    display: none;
  }
</style>