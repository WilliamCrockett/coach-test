import Route from '@ember/routing/route'
import { alias } from '@ember/object/computed'
import { inject as service } from '@ember/service'

export default Route.extend({
  auth: service(),

  user: alias('auth.credentials.email'),
  isAuthenticated: alias('auth.isAuthenticated')
})
