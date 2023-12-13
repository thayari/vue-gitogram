import HomeFeedsPage from '../pages/HomeFeedsPage/HomeFeedsPage.vue'
import StoriesPage from '../pages/StoriesPage/StoriesPage.vue'
import AuthPage from '../pages/AuthPage/AuthPage.vue'

export default [
  {
    path: '/',
    component: HomeFeedsPage,
    name: 'home'
  },
  {
    path: '/stories',
    component: StoriesPage,
    name: 'stories',
    props: route => ({ initSlide: route.query.initSlide })
  },
  {
    path: '/auth',
    component: AuthPage,
    name: 'auth'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]
