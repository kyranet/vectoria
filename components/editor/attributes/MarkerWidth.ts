import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueLengthPercentage } from '../../../utils/svg/attributes/base/values/lengthPercentage';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const MarkerWidth = makeAttribute({
	name: 'markerWidth',
	propertyName: 'markerWidth',
	title: 'Marker Width',
	types: [attributeValueNumber(), attributeValueLengthPercentage()],
	default: 3,
	animatable: true,
	appliesTo: ['marker'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/markerWidth'
});
