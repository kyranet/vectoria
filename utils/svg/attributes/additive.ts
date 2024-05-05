import { makeAttribute } from './base/makeAttribute';
import { attributeValueEnum } from './base/values/enum';

export const AdditiveAttribute = makeAttribute({
	name: 'additive',
	propertyName: 'additive',
	title: 'Additive',
	types: [attributeValueEnum('replace', 'sum')],
	default: 'replace',
	appliesTo: ['animate', 'animateMotion', 'animateTransform'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/additive'
})
