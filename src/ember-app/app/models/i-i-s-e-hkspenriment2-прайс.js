import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПрайсMixin
} from '../mixins/regenerated/models/i-i-s-e-hkspenriment2-прайс';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПрайсMixin, Validations, {
});

defineProjections(Model);

export default Model;
