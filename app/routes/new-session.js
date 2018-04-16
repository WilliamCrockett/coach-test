import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    addSession (newSession) {
      console.log(newSession)
      const session = this.get('store').createRecord('session', newSession).save()
        .then(() => {
          this.toast.success('This session was successfully added', 'Success!', {preventDuplicates: false})
          // this.transitionTo('sessions')
        })
        .catch(() => {
          this.toast.error('There was a problem adding this session', 'Error!', {preventDuplicates: false})
        })
    }
  }
})
