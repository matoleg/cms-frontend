import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-c-m-s-resource', 'Unit | Serializer | i-i-s-c-m-s-resource', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-c-m-s-resource',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-c-m-s-competence-level',

    'model:i-i-s-c-m-s-competence-resource',
    'model:i-i-s-c-m-s-competence',
    'model:i-i-s-c-m-s-resource',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
