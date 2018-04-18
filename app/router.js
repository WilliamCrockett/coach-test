import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('sign-up')
  this.route('sign-in')
  this.route('change-password')
  this.route('users')
  this.route('newSession')
  this.route('viewOldSessions')
  this.route('sessions')
  this.route('session', { path: 'sessions/:id' })
  this.route('edit', { path: 'sessions/:id/edit' })
  // this.route('session', { path: 'sessions/:id' }, function () {
  //   this.route('edit')
  // })
  this.route('not-found', { path: '*path' })
})

export default Router
