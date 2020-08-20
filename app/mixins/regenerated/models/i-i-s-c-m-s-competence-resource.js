import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  level: DS.attr('i-i-s-c-m-s-competence-level'),
  resource: DS.belongsTo('i-i-s-c-m-s-resource', { inverse: null, async: false }),
  competence: DS.belongsTo('i-i-s-c-m-s-competence', { inverse: 'competenceResource', async: false })
});

export let ValidationRules = {
  level: {
    descriptionKey: 'models.i-i-s-c-m-s-competence-resource.validations.level.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  resource: {
    descriptionKey: 'models.i-i-s-c-m-s-competence-resource.validations.resource.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  competence: {
    descriptionKey: 'models.i-i-s-c-m-s-competence-resource.validations.competence.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CompetenceResourceE', 'i-i-s-c-m-s-competence-resource', {
    level: attr('Level', { index: 0 }),
    resource: belongsTo('i-i-s-c-m-s-resource', 'Resource', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
