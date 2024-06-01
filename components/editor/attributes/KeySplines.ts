import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const KeySplines = makeAttribute({
	name: 'keySplines',
	propertyName: 'keySplines',
	title: 'Key Splines',
	types: [attributeValueString()],
	default: null,
	animatable: false,
	appliesTo: ['animate', 'animateMotion', 'animateTransform'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keySplines'
});
