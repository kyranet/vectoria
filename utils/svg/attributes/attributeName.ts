import { makeAttribute } from './base/makeAttribute';
import { attributeValueString } from './base/values/string';

export const AttributeNameAttribute = makeAttribute({
	name: 'attributeName',
	propertyName: 'attributeName',
	title: 'Attribute Name',
	types: [attributeValueString()],
	default: null,
	appliesTo: ['animate', 'animateTransform', 'set'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/attributeName'
});
