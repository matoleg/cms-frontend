import { Serializer as CompetenceResourceSerializer } from
  '../mixins/regenerated/serializers/i-i-s-c-m-s-competence-resource';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CompetenceResourceSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
