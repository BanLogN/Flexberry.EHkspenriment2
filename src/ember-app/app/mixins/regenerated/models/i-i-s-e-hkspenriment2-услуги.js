import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  пОзиция: DS.attr('number'),
  прайс: DS.belongsTo('i-i-s-e-hkspenriment2-прайс', { inverse: null, async: false })
});

export let ValidationRules = {
  пОзиция: {
    descriptionKey: 'models.i-i-s-e-hkspenriment2-услуги.validations.пОзиция.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  прайс: {
    descriptionKey: 'models.i-i-s-e-hkspenriment2-услуги.validations.прайс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугиE', 'i-i-s-e-hkspenriment2-услуги', {
    пОзиция: attr('П озиция', { index: 0 })
  });

  modelClass.defineProjection('УслугиL', 'i-i-s-e-hkspenriment2-услуги', {
    пОзиция: attr('П озиция', { index: 0 }),
    прайс: belongsTo('i-i-s-e-hkspenriment2-прайс', 'Прайс', {
      цена: attr('Цена', { index: 2 })
    }, { index: 1 })
  });
};
