import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueLengthPercentage } from '../../../utils/svg/attributes/base/values/lengthPercentage';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const MarkerHeight = makeAttribute({
	name: 'markerHeight',
	propertyName: 'markerHeight',
	title: 'Marker Height',
	types: [attributeValueNumber(), attributeValueLengthPercentage()],
	default: 3,
	animatable: true,
	appliesTo: ['marker'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/markerHeight'
});
