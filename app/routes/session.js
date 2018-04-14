import Route from '@ember/routing/route'

export default Route.extend({
  actions: { // TODO fix pdf function
    createPDF: function () {
      const doc = new jsPDF({
        orientation: 'portrait'
      })
      const specialElementHandlers = {
        '#editor': function (element, renderer) {
          return true
        }
      }
      doc.fromHTML($('#singleSession').get(0), 10, 10, {
        'width': 170,
        'elementHandlers': specialElementHandlers
      })
      doc.save('eventCrewList.pdf')
    }
  }
})
