import { Middleware } from '@nuxt/types'

const guestMiddleware: Middleware = ({ $auth, redirect }) => {
  if ($auth.loggedIn) {
    redirect('/')
  }
}

export default guestMiddleware
