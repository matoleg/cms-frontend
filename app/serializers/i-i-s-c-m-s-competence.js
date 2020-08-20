import { Serializer as CompetenceSerializer } from
  '../mixins/regenerated/serializers/i-i-s-c-m-s-competence';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CompetenceSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
