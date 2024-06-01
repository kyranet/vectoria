import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const D = makeAttribute({
	name: 'd',
	propertyName: 'd',
	title: 'D',
	types: [attributeValueString()],
	default: '',
	animatable: true,
	appliesTo: ['path'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d'
});
