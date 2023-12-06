import HomeFeedsPage from '../pages/HomeFeedsPage/HomeFeedsPage.vue'
import StoriesPage from '../pages/StoriesPage/StoriesPage.vue'

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
  }
]
