import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bricks/blue', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bricks/blue');
    assert.ok(route);
  });
});
