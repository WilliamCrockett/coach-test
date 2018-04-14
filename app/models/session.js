import DS from 'ember-data'

export default DS.Model.extend({
  session_id: DS.attr(),
  program: DS.attr(),
  session_date: DS.attr(),
  session_rating: DS.attr(),
  helm: DS.attr(),
  crew: DS.attr(),
  wind_dir: DS.attr(),
  wind_strength: DS.attr(),
  chop: DS.attr(),
  objective_1: DS.attr(),
  objective_2: DS.attr(),
  objective_3: DS.attr(),
  objective_4: DS.attr(),
  objective_5: DS.attr(),
  session_report: DS.attr(),
  boat_maint: DS.attr(),
  boat_maint_info: DS.attr(),
  editable: DS.attr()
})
