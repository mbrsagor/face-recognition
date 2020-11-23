'use strict';

define("udacity-meals312/tests/integration/components/order-traker-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | order-traker', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "zd5E6+qj",
        "block": "{\"symbols\":[],\"statements\":[[5,\"order-traker\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "KbAVEmPE",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"order-traker\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("udacity-meals312/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/order-traker.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/order-traker.js should pass ESLint\n\n4:19 - Use `import { inject } from \'@ember/service\';` instead of using Ember.inject.service (ember/new-module-imports)\n4:19 - \'Ember\' is not defined. (no-undef)');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/bricks.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bricks.js should pass ESLint\n\n');
  });
  QUnit.test('routes/bricks/blue.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bricks/blue.js should pass ESLint\n\n');
  });
  QUnit.test('routes/bricks/red.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bricks/red.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/item.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/item.js should pass ESLint\n\n5:16 - Use `import $ from \'jquery\';` instead of using Ember.$ (ember/new-module-imports)\n5:16 - \'Ember\' is not defined. (no-undef)');
  });
  QUnit.test('routes/item/nutration.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/item/nutration.js should pass ESLint\n\n');
  });
  QUnit.test('routes/menu.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/menu.js should pass ESLint\n\n5:16 - Use `import $ from \'jquery\';` instead of using Ember.$ (ember/new-module-imports)\n5:16 - \'Ember\' is not defined. (no-undef)');
  });
  QUnit.test('routes/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/store.js should pass ESLint\n\n');
  });
  QUnit.test('routes/toys.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/toys.js should pass ESLint\n\n');
  });
  QUnit.test('services/order-manager.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/order-manager.js should pass ESLint\n\n5:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });
});
define("udacity-meals312/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('udacity-meals312/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'udacity-meals312/templates/application.hbs should pass TemplateLint.\n\nudacity-meals312/templates/application.hbs\n  2:4  error  Incorrect indentation for `<LinkTo>` beginning at L2:C4. Expected `<LinkTo>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<button>` beginning at L3:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  8:4  error  Incorrect indentation for `<div>` beginning at L8:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:8  error  Incorrect indentation for `<span>` beginning at L5:C8. Expected `<span>` to be at an indentation of 6 but was found at 8.  block-indentation\n  9:8  error  Incorrect indentation for `<ul>` beginning at L9:C8. Expected `<ul>` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:12  error  Incorrect indentation for `<li>` beginning at L10:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  13:12  error  Incorrect indentation for `<li>` beginning at L13:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  16:12  error  Incorrect indentation for `<li>` beginning at L16:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  19:12  error  Incorrect indentation for `<li>` beginning at L19:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  11:16  error  Incorrect indentation for `<LinkTo>` beginning at L11:C16. Expected `<LinkTo>` to be at an indentation of 14 but was found at 16.  block-indentation\n  14:16  error  Incorrect indentation for `<LinkTo>` beginning at L14:C16. Expected `<LinkTo>` to be at an indentation of 14 but was found at 16.  block-indentation\n  17:16  error  Incorrect indentation for `<LinkTo>` beginning at L17:C16. Expected `<LinkTo>` to be at an indentation of 14 but was found at 16.  block-indentation\n  20:16  error  Incorrect indentation for `<LinkTo>` beginning at L20:C16. Expected `<LinkTo>` to be at an indentation of 14 but was found at 16.  block-indentation\n  27:4  error  Incorrect indentation for `<div>` beginning at L27:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  28:8  error  Incorrect indentation for `<div>` beginning at L28:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  29:12  error  Incorrect indentation for `{{! {{order-traker}} }}` beginning at L29:C12. Expected `{{! {{order-traker}} }}` to be at an indentation of 10 but was found at 12.  block-indentation\n  30:12  error  Incorrect indentation for `{{outlet}}` beginning at L30:C12. Expected `{{outlet}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  2:40  error  you must use double quotes in templates  quotes\n  11:31  error  you must use double quotes in templates  quotes\n  14:31  error  you must use double quotes in templates  quotes\n  17:31  error  you must use double quotes in templates  quotes\n  20:31  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('udacity-meals312/templates/bricks.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'udacity-meals312/templates/bricks.hbs should pass TemplateLint.\n\nudacity-meals312/templates/bricks.hbs\n  4:4  error  Incorrect indentation for `<li>` beginning at L4:C4. Expected `<li>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:4  error  Incorrect indentation for `<li>` beginning at L5:C4. Expected `<li>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:19  error  you must use double quotes in templates  quotes\n  4:41  error  you must use double quotes in templates  quotes\n  5:19  error  you must use double quotes in templates  quotes\n  5:42  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('udacity-meals312/templates/bricks/blue.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'udacity-meals312/templates/bricks/blue.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('udacity-meals312/templates/bricks/red.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'udacity-meals312/templates/bricks/red.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('udacity-meals312/templates/components/order-traker.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'udacity-meals312/templates/components/order-traker.hbs should pass TemplateLint.\n\nudacity-meals312/templates/components/order-traker.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:4  error  Incorrect indentation for `{{#each-in}}` beginning at L5:C4. Expected `{{#each-in}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  2:8  error  Incorrect indentation for `Select food for ` beginning at L2:C8. Expected `Select food for ` to be at an indentation of 6 but was found at 8.  block-indentation\n  6:4  error  Incorrect indentation for `<div>` beginning at L6:C4. Expected `<div>` to be at an indentation of 6 but was found at 4.  block-indentation\n  7:8  error  Incorrect indentation for `{{day}}` beginning at L7:C8. Expected `{{day}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:8  error  Incorrect indentation for `<dl>` beginning at L8:C8. Expected `<dl>` to be at an indentation of 6 but was found at 8.  block-indentation\n  9:12  error  Incorrect indentation for `<dt>` beginning at L9:C12. Expected `<dt>` to be at an indentation of 10 but was found at 12.  block-indentation\n  10:12  error  Incorrect indentation for `<dd>` beginning at L10:C12. Expected `<dd>` to be at an indentation of 10 but was found at 12.  block-indentation\n  11:12  error  Incorrect indentation for `<dt>` beginning at L11:C12. Expected `<dt>` to be at an indentation of 10 but was found at 12.  block-indentation\n  12:12  error  Incorrect indentation for `<dd>` beginning at L12:C12. Expected `<dd>` to be at an indentation of 10 but was found at 12.  block-indentation\n  13:12  error  Incorrect indentation for `<dt>` beginning at L13:C12. Expected `<dt>` to be at an indentation of 10 but was found at 12.  block-indentation\n  14:12  error  Incorrect indentation for `<dd>` beginning at L14:C12. Expected `<dd>` to be at an indentation of 10 but was found at 12.  block-indentation\n');
  });
  QUnit.test('udacity-meals312/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'udacity-meals312/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('udacity-meals312/templates/item.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'udacity-meals312/templates/item.hbs should pass TemplateLint.\n\nudacity-meals312/templates/item.hbs\n  1:0  error  Unexpected {{log}} usage.  no-log\n  4:41  error  Unnecessary string concatenation. Use {{ model.name }} instead of "{{ model.name }}".  no-unnecessary-concat\n  7:14  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('udacity-meals312/templates/item/nutration.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'udacity-meals312/templates/item/nutration.hbs should pass TemplateLint.\n\nudacity-meals312/templates/item/nutration.hbs\n  3:4  error  Incorrect indentation for `<dt>` beginning at L3:C4. Expected `<dt>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:4  error  Incorrect indentation for `<dt>` beginning at L4:C4. Expected `<dt>` to be at an indentation of 2 but was found at 4.  block-indentation\n');
  });
  QUnit.test('udacity-meals312/templates/menu.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'udacity-meals312/templates/menu.hbs should pass TemplateLint.\n\nudacity-meals312/templates/menu.hbs\n  6:4  error  Incorrect indentation for `{{#each}}` beginning at L6:C4. Expected `{{#each}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  7:4  error  Incorrect indentation for `<li>` beginning at L7:C4. Expected `<li>` to be at an indentation of 6 but was found at 4.  block-indentation\n  8:8  error  Incorrect indentation for `<h4>` beginning at L8:C8. Expected `<h4>` to be at an indentation of 6 but was found at 8.  block-indentation\n  9:12  error  Incorrect indentation for `<img>` beginning at L9:C12. Expected `<img>` to be at an indentation of 6 but was found at 12.  block-indentation\n  10:12  error  Incorrect indentation for `<p>` beginning at L10:C12. Expected `<p>` to be at an indentation of 6 but was found at 12.  block-indentation\n  11:16  error  Incorrect indentation for `{{! {{#link-to \'item\' item.id}} Details {{/link-to}} }}` beginning at L11:C16. Expected `{{! {{#link-to \'item\' item.id}} Details {{/link-to}} }}` to be at an indentation of 14 but was found at 16.  block-indentation\n  12:16  error  Incorrect indentation for `<LinkTo>` beginning at L12:C16. Expected `<LinkTo>` to be at an indentation of 14 but was found at 16.  block-indentation\n  9:52  error  Unnecessary string concatenation. Use {{ item.name }} instead of "{{ item.name }}".  no-unnecessary-concat\n  12:31  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('udacity-meals312/templates/store.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'udacity-meals312/templates/store.hbs should pass TemplateLint.\n\nudacity-meals312/templates/store.hbs\n  3:4  error  Incorrect indentation for `<section>` beginning at L3:C4. Expected `<section>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:8  error  Incorrect indentation for `<h2>` beginning at L4:C8. Expected `<h2>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:12  error  Incorrect indentation for `<table>` beginning at L5:C12. Expected `<table>` to be at an indentation of 6 but was found at 12.  block-indentation\n  6:16  error  Incorrect indentation for `<thead>` beginning at L6:C16. Expected `<thead>` to be at an indentation of 14 but was found at 16.  block-indentation\n  12:16  error  Incorrect indentation for `{{#each}}` beginning at L12:C16. Expected `{{#each}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  7:20  error  Incorrect indentation for `<tr>` beginning at L7:C20. Expected `<tr>` to be at an indentation of 18 but was found at 20.  block-indentation\n  8:24  error  Incorrect indentation for `<th>` beginning at L8:C24. Expected `<th>` to be at an indentation of 22 but was found at 24.  block-indentation\n  9:24  error  Incorrect indentation for `<th>` beginning at L9:C24. Expected `<th>` to be at an indentation of 22 but was found at 24.  block-indentation\n  13:16  error  Incorrect indentation for `<tbody>` beginning at L13:C16. Expected `<tbody>` to be at an indentation of 18 but was found at 16.  block-indentation\n  14:20  error  Incorrect indentation for `<tr>` beginning at L14:C20. Expected `<tr>` to be at an indentation of 18 but was found at 20.  block-indentation\n  15:24  error  Incorrect indentation for `<td>` beginning at L15:C24. Expected `<td>` to be at an indentation of 22 but was found at 24.  block-indentation\n  16:24  error  Incorrect indentation for `<td>` beginning at L16:C24. Expected `<td>` to be at an indentation of 22 but was found at 24.  block-indentation\n');
  });
  QUnit.test('udacity-meals312/templates/toys.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'udacity-meals312/templates/toys.hbs should pass TemplateLint.\n\nudacity-meals312/templates/toys.hbs\n  4:4  error  Incorrect indentation for `<li>` beginning at L4:C4. Expected `<li>` to be at an indentation of 2 but was found at 4.  block-indentation\n  8:4  error  Incorrect indentation for `<li>` beginning at L8:C4. Expected `<li>` to be at an indentation of 2 but was found at 4.  block-indentation\n  12:4  error  Incorrect indentation for `<li>` beginning at L12:C4. Expected `<li>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:8  error  Incorrect indentation for `Cras justo odio\n        ` beginning at L5:C8. Expected `Cras justo odio\n        ` to be at an indentation of 6 but was found at 8.  block-indentation\n  6:8  error  Incorrect indentation for `<span>` beginning at L6:C8. Expected `<span>` to be at an indentation of 6 but was found at 8.  block-indentation\n  9:8  error  Incorrect indentation for `Dapibus ac facilisis in\n        ` beginning at L9:C8. Expected `Dapibus ac facilisis in\n        ` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:8  error  Incorrect indentation for `<span>` beginning at L10:C8. Expected `<span>` to be at an indentation of 6 but was found at 8.  block-indentation\n  13:8  error  Incorrect indentation for `Morbi leo risus\n        ` beginning at L13:C8. Expected `Morbi leo risus\n        ` to be at an indentation of 6 but was found at 8.  block-indentation\n  14:8  error  Incorrect indentation for `<span>` beginning at L14:C8. Expected `<span>` to be at an indentation of 6 but was found at 8.  block-indentation\n');
  });
});
define("udacity-meals312/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/order-traker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/order-traker-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/bricks-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bricks-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/bricks/blue-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bricks/blue-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/bricks/red-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bricks/red-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/item-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/item/nutration-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/item/nutration-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/menu-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/menu-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/store-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/store-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/toys-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/toys-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/order-manager-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/order-manager-test.js should pass ESLint\n\n');
  });
});
define("udacity-meals312/tests/test-helper", ["udacity-meals312/app", "udacity-meals312/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("udacity-meals312/tests/unit/routes/bricks-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | bricks', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:bricks');
      assert.ok(route);
    });
  });
});
define("udacity-meals312/tests/unit/routes/bricks/blue-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | bricks/blue', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:bricks/blue');
      assert.ok(route);
    });
  });
});
define("udacity-meals312/tests/unit/routes/bricks/red-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | bricks/red', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:bricks/red');
      assert.ok(route);
    });
  });
});
define("udacity-meals312/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("udacity-meals312/tests/unit/routes/item-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | item', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:item');
      assert.ok(route);
    });
  });
});
define("udacity-meals312/tests/unit/routes/item/nutration-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | item/nutration', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:item/nutration');
      assert.ok(route);
    });
  });
});
define("udacity-meals312/tests/unit/routes/menu-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | menu', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:menu');
      assert.ok(route);
    });
  });
});
define("udacity-meals312/tests/unit/routes/store-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | store', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:store');
      assert.ok(route);
    });
  });
});
define("udacity-meals312/tests/unit/routes/toys-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | toys', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:toys');
      assert.ok(route);
    });
  });
});
define("udacity-meals312/tests/unit/services/order-manager-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | order-manager', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:order-manager');
      assert.ok(service);
    });
  });
});
define('udacity-meals312/config/environment', [], function() {
  var prefix = 'udacity-meals312';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('udacity-meals312/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
