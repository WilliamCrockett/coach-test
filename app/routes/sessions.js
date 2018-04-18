import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('session')
  },
  actions: {
    confirmDelete (session) {
      session.destroyRecord()
      this.toast.success('This session was successfully deleted', 'Success!', {preventDuplicates: false})
    }
  }
})
