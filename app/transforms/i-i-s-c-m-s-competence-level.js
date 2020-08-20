import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import CompetenceLevelEnum from '../enums/i-i-s-c-m-s-competence-level';

export default FlexberryEnum.extend({
  enum: CompetenceLevelEnum,
  sourceType: 'IIS.CMS.CompetenceLevel'
});
