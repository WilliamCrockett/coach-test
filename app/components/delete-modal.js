import Component from '@ember/component'

export default Component.extend({

  actions: {
    confirmDelete (session) {
      this.sendAction('confirmDelete', session)
    }
  }
})
