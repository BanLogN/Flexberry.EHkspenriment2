import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-e-hkspenriment2-список-услуг', 'Unit | Model | i-i-s-e-hkspenriment2-список-услуг', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-e-hkspenriment2-прайс',
    'model:i-i-s-e-hkspenriment2-список-услуг',
    'model:i-i-s-e-hkspenriment2-услуги',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
