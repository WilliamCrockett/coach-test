import Route from '@ember/routing/route'

export default Route.extend({
 model (params) {
   console.log('in model hook', params)
   return this.get('store').findRecord('session', params.id)
 }
})
