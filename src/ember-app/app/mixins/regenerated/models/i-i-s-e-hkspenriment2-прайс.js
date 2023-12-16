import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  цена: DS.attr('decimal'),
  списокУслуг: DS.belongsTo('i-i-s-e-hkspenriment2-список-услуг', { inverse: null, async: false })
});

export let ValidationRules = {
  цена: {
    descriptionKey: 'models.i-i-s-e-hkspenriment2-прайс.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  списокУслуг: {
    descriptionKey: 'models.i-i-s-e-hkspenriment2-прайс.validations.списокУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПрайсE', 'i-i-s-e-hkspenriment2-прайс', {
    цена: attr('Цена', { index: 0 }),
    списокУслуг: belongsTo('i-i-s-e-hkspenriment2-список-услуг', 'Список услуг', {
      имя: attr('Имя', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'имя' })
  });

  modelClass.defineProjection('ПрайсL', 'i-i-s-e-hkspenriment2-прайс', {
    цена: attr('Цена', { index: 0 }),
    списокУслуг: belongsTo('i-i-s-e-hkspenriment2-список-услуг', 'Имя', {
      имя: attr('Имя', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
