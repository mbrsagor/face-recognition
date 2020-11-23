import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('menu', {path:'menu-list'});
  this.route('bricks', {path: 'legos'}, function() {
    this.route('blue');
    this.route('red');
  });
  this.route('item', {path: 'item/:item_name'}, function() {
    this.route('nutration');
  });
  this.route('toys');
  this.route('store', function() {});
});

export default Router;
