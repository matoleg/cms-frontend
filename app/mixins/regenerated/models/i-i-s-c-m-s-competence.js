import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  competenceResource: DS.hasMany('i-i-s-c-m-s-competence-resource', { inverse: 'competence', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-c-m-s-competence.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  competenceResource: {
    descriptionKey: 'models.i-i-s-c-m-s-competence.validations.competenceResource.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CompetenceE', 'i-i-s-c-m-s-competence', {
    name: attr('Name', { index: 0 }),
    competenceResource: hasMany('i-i-s-c-m-s-competence-resource', 'Competence resource', {
      level: attr('Level', { index: 0 }),
      resource: belongsTo('i-i-s-c-m-s-resource', 'Resource', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('CompetenceL', 'i-i-s-c-m-s-competence', {
    name: attr('Name', { index: 0 })
  });
};
