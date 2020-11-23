import Component from '@ember/component';

export default Component.extend({
    orderManager: Ember.inject.service('order-manager'),
});
