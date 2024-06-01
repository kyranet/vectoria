import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';

export const GradientUnits = makeAttribute({
	name: 'gradientUnits',
	propertyName: 'gradientUnits',
	title: 'Gradient Units',
	types: [attributeValueEnum('objectBoundingBox', 'userSpaceOnUse')],
	default: 'objectBoundingBox',
	animatable: true,
	appliesTo: ['linearGradient', 'radialGradient'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/gradientUnits'
});
