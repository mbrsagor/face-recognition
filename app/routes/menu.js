import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return Ember.$.get('/menu/menu.json');
    }
});
