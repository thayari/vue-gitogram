import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes.js'
import * as api from '../api'
import store from '../store'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'

  if (authRoute) {
    next()
    return
  }
  try {
    const userInStore = store.state.user.data

    if (userInStore && Object.keys(userInStore).length !== 0) {
      // If user data exists in the store, proceed to the route
      console.log('User data in store:', userInStore)
      next()
    } else {
      const user = await api.auth.getUser()
      console.log(user)
      next()
    }
  } catch (error) {
    console.log(error)
    next({ name: 'auth' })
  }
})

export default router
