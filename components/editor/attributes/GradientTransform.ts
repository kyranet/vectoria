import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const GradientTransform = makeAttribute({
	name: 'gradientTransform',
	propertyName: 'gradientTransform',
	title: 'Gradient Transform',
	types: [attributeValueString()],
	default: null,
	animatable: true,
	appliesTo: ['linearGradient', 'radialGradient'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/gradientTransform'
});
