import Component from '@ember/component'

export default Component.extend({
  session: {},

  actions: {
    updateSession () {
      this.sendAction('editSession', this.get('session'))
    },
    setProgram (e) {
      this.set('session.program', e.target.value)
    },
    setRating (e) {
      this.set('session.session_rating', e.target.value)
    },
    setSessionReport (e) {
      this.set('session.session_report', e)
    },
    setBoatMaint (e) {
      this.set('session.boat_maint', e.target.value)
    },
    setBoatMaintReport (e) {
      this.set('session.boat_maint_info', e)
    },
    setSessionOption (e) {
      // might not need this?
    }
  }
})
