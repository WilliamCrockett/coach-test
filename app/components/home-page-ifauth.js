import Component from '@ember/component'

export default Component.extend({
  actions: {
    getByProgram () {
      this.sendAction('getByProgram')
    }
  }
})
