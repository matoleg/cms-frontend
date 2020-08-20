import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-c-m-s-resource', 'Unit | Model | i-i-s-c-m-s-resource', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-c-m-s-competence-resource',
    'model:i-i-s-c-m-s-competence',
    'model:i-i-s-c-m-s-resource',
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
