import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    return this.get('store').findRecord('session', params.id)
  },
  actions: {
    editSession (session) {
      session.save()
        .then(() => {
          this.toast.success('This session was successfully updated', 'Success!', {preventDuplicates: false})
          this.transitionTo('sessions')
        })
        .catch(() => {
          this.toast.error('There was a problem updating this session. Please check the fields and try again', 'Error!', {preventDuplicates: false})
        })
    }
  }
})
