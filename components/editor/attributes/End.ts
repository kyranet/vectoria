import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueArray } from '../../../utils/svg/attributes/base/values/array';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const End = makeAttribute({
	name: 'end',
	propertyName: 'end',
	title: 'End',
	types: [attributeValueArray(attributeValueString())],
	default: null,
	animatable: true,
	appliesTo: ['animate', 'animateMotion', 'animateTransform', 'set'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/end'
});
