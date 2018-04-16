import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('session')
  },
  actions: {
    onDelete (session) {
      console.log('hi')

      if (confirm("are you sure to delete")) { // I dont like this
        session.destroyRecord() // this works but I need to do a confirmation
        this.toast.success('This session was successfully deleted', 'Success!', {preventDuplicates: false})
      } else {
        this.toast.info("We didn't delete this record", 'Note!', {preventDuplicates: false})
      }
    }
  }
})
