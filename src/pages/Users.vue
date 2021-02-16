<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-xs-10 col-sm-8 col-md-5 col-lg-5 col-xl-5">

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

  .q-list {
    background-color: #FFF;
  }
</style>