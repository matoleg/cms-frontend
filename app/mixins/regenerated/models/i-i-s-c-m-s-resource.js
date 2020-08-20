import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  link: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-c-m-s-resource.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.i-i-s-c-m-s-resource.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  link: {
    descriptionKey: 'models.i-i-s-c-m-s-resource.validations.link.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ResourceE', 'i-i-s-c-m-s-resource', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    link: attr('Link', { index: 2 })
  });

  modelClass.defineProjection('ResourceL', 'i-i-s-c-m-s-resource', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    link: attr('Link', { index: 2 })
  });
};
