import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueLengthPercentage } from '../../../utils/svg/attributes/base/values/lengthPercentage';

export const Cy = makeAttribute({
	name: 'cy',
	propertyName: 'cy',
	title: 'Center Y',
	types: [attributeValueLengthPercentage()],
	default: { value: 0, unit: null },
	animatable: true,
	appliesTo: ['circle', 'ellipse', 'radialGradient'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cy'
});
