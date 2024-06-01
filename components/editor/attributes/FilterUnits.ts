import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';

export const FilterUnits = makeAttribute({
	name: 'filterUnits',
	propertyName: 'filterUnits',
	title: 'Filter Units',
	types: [attributeValueEnum('userSpaceOnUse', 'objectBoundingBox')],
	default: 'objectBoundingBox',
	animatable: true,
	appliesTo: ['filter'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/filterUnits'
});
