
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/OnboardingPage.vue') },
      { path: 'aktivitas', component: () => import('pages/IndexPage.vue') },      
      { path: 'fokus', component: () => import('pages/FokusPage.vue') },      
      { path: 'relax', component: () => import('pages/RelaxPage.vue') },                  
      { path: 'explore', component: () => import('pages/ExplorePage.vue') },      
      { path: 'nowplaying', component: () => import('pages/NowplayingPage.vue') },      
      { path: 'updates', component: () => import('pages/UpdatesPage.vue') },
      { path: 'play/:slug', component: () => import('pages/PlayPage.vue') }      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
