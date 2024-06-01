import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueLengthPercentage } from '../../../utils/svg/attributes/base/values/lengthPercentage';

export const Cx = makeAttribute({
	name: 'cx',
	propertyName: 'cx',
	title: 'Center X',
	types: [attributeValueLengthPercentage()],
	default: { value: 0, unit: null },
	animatable: true,
	appliesTo: ['circle', 'ellipse', 'radialGradient'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cx'
});
