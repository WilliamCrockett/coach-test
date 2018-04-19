import Service, { inject as service } from '@ember/service'

export default Service.extend({
  ajax: service(),

  byProgram (program) {
    return this.get('ajax').request('/sessions?program=' + program, {
      // do I need stuff?
    })
  }
})
