import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  queries: service()

  // model () {
  //   return this.get('queries').byProgram('470m')
  // }
  //
  // actions: {
  //   getByProgram () {
  //     this.get('queries').byProgram('470m')
  //       .then((data) => {
  //         this.set('foo.some_key', 'hello world')
  //         this.refresh()
  //         return data })
  //       .then((data) => console.log('ajax returns this shit', data))
  //   }
  // }

})
