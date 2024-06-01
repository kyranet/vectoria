import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const LimitingConeAngle = makeAttribute({
	name: 'limitingConeAngle',
	propertyName: 'limitingConeAngle',
	title: 'Limiting Cone Angle',
	types: [attributeValueNumber()],
	default: 0,
	animatable: true,
	appliesTo: ['feSpotLight'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/limitingConeAngle'
});
