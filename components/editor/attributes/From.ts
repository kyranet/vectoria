import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const From = makeAttribute({
	name: 'from',
	propertyName: 'from',
	title: 'From',
	types: [attributeValueString()],
	default: null,
	animatable: false,
	appliesTo: ['animate', 'animateMotion', 'animateMotion'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/from'
});
