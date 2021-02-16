
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'albums', path: '/', component: () => import('pages/Albums.vue') },
      { name: 'album', path: '/album/:userId/:albumId/:albumTitle', component: () => import('pages/Album.vue') },
      { name: 'albumEdit', path: '/album/:userId/:albumId/:albumTitle/edit', component: () => import('pages/Album.vue') },
      { name: 'users', path: '/users', component: () => import('pages/Users.vue') },
      { name: 'user', path: '/users/:userId', component: () => import('pages/User.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
