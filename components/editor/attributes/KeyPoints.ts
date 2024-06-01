import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueArray } from '../../../utils/svg/attributes/base/values/array';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const KeyPoints = makeAttribute({
	name: 'keyPoints',
	propertyName: 'keyPoints',
	title: 'Key Points',
	types: [attributeValueArray(attributeValueNumber())],
	default: null,
	animatable: false,
	appliesTo: ['animate', 'animateMotion', 'animateTransform', 'set'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keyPoints'
});
