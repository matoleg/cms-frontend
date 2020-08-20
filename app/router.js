import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-c-m-s-competence-l');
  this.route('i-i-s-c-m-s-competence-e',
  { path: 'i-i-s-c-m-s-competence-e/:id' });
  this.route('i-i-s-c-m-s-competence-e.new',
  { path: 'i-i-s-c-m-s-competence-e/new' });
  this.route('i-i-s-c-m-s-resource-l');
  this.route('i-i-s-c-m-s-resource-e',
  { path: 'i-i-s-c-m-s-resource-e/:id' });
  this.route('i-i-s-c-m-s-resource-e.new',
  { path: 'i-i-s-c-m-s-resource-e/new' });
});

export default Router;
