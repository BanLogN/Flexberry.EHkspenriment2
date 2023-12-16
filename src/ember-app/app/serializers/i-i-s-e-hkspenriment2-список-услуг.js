import { Serializer as СписокУслугSerializer } from
  '../mixins/regenerated/serializers/i-i-s-e-hkspenriment2-список-услуг';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СписокУслугSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
