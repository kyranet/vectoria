import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueArray } from '../../../utils/svg/attributes/base/values/array';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const KeyTimes = makeAttribute({
	name: 'keyTimes',
	propertyName: 'keyTimes',
	title: 'Key Times',
	types: [attributeValueArray(attributeValueNumber())],
	default: null,
	animatable: false,
	appliesTo: ['animate', 'animateMotion', 'animateTransform'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keyTimes'
});
