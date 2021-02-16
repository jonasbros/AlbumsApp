<template>
  <div class="user-item__container">
    <q-item>
      <q-item-section top avatar>
        <q-btn 
          :to="{ name: 'user', params: { userId: user.id } }"
          round type="a" 
          color="primary" 
          text-color="white" 
          icon="person"
          size="1.2em"
        />
      </q-item-section>

      <q-item-section>
        <q-item-label>
          <router-link class="hover__link" :to="{ name: 'user', params: { userId: user.id } }">
            {{ user.name }}
          </router-link>
        </q-item-label>

        <q-item-label caption lines="2">
          {{ user.email }}
        </q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>
          {{ user.company.name }}
        </q-item-label>
        
        <q-item-label caption>
          {{ user.website }}
        </q-item-label>
      </q-item-section>
    </q-item>
    
    <q-separator spaced inset="item" />
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: 
    [
      'user',
    ]
  ,
  computed: {

  },
}
</script>

<style lang="scss">

</style>