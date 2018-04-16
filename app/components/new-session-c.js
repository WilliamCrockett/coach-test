import Component from '@ember/component'

export default Component.extend({
  newSession: {
    program: '',
    session_date: '',
    session_rating: '',
    helm: '',
    crew: '',
    wind_dir: '',
    wind_strength: '',
    chop: '',
    objective_1: '',
    objective_2: '',
    objective_3: '',
    objective_4: '',
    objective_5: '',
    session_report: '',
    boat_maint: '',
    boat_maint_info: ''
  },

  actions: {
    addSession (newSession, e) {
      this.sendAction('addSession', this.get('newSession'))
      // this.set('newSession', {})
    },
    setProgram (e) {
      this.set('newSession.program', e.target.value)
    },
    setRating (e) {
      this.set('newSession.session_rating', e.target.value)
    },
    setSessionReport (e) {
      this.set('newSession.session_report', e.target.value)
    },
    setBoatMaint (e) {
      this.set('newSession.boat_maint', e.target.value)
    },
    setBoatMaintReport (e) {
      this.set('newSession.boat_maint_info', e.target.value)
    }
  }
})
