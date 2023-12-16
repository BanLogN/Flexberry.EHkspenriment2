import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-e-hkspenriment2-прайс-l');
  this.route('i-i-s-e-hkspenriment2-прайс-e',
  { path: 'i-i-s-e-hkspenriment2-прайс-e/:id' });
  this.route('i-i-s-e-hkspenriment2-прайс-e.new',
  { path: 'i-i-s-e-hkspenriment2-прайс-e/new' });
  this.route('i-i-s-e-hkspenriment2-список-услуг-l');
  this.route('i-i-s-e-hkspenriment2-список-услуг-e',
  { path: 'i-i-s-e-hkspenriment2-список-услуг-e/:id' });
  this.route('i-i-s-e-hkspenriment2-список-услуг-e.new',
  { path: 'i-i-s-e-hkspenriment2-список-услуг-e/new' });
  this.route('i-i-s-e-hkspenriment2-услуги-l');
  this.route('i-i-s-e-hkspenriment2-услуги-e',
  { path: 'i-i-s-e-hkspenriment2-услуги-e/:id' });
  this.route('i-i-s-e-hkspenriment2-услуги-e.new',
  { path: 'i-i-s-e-hkspenriment2-услуги-e/new' });
});

export default Router;
