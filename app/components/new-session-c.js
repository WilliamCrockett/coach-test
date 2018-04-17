import Component from '@ember/component'

export default Component.extend({

  actions: {
    addSession () {
      console.log('in new session componebt', this.get('session'))
      this.sendAction('addSession', this.get('session'))
      // this.set('session', {}) // move into route TODO
    },
    setProgram (e) {
      this.set('session.program', e.target.value)
    },
    setRating (e) {
      this.set('session.session_rating', e.target.value)
    },
    setSessionReport (e) {
      console.log(e)
      // this.set('session.session_report', e.target.value)
      this.set('session.session_report', e)
    },
    setBoatMaint (e) {
      this.set('session.boat_maint', e.target.value)
    },
    setBoatMaintReport (e) {
      this.set('session.boat_maint_info', e)
    }
  }
})
