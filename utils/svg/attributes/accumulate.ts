import { makeAttribute } from './base/makeAttribute';
import { attributeValueEnum } from './base/values/enum';

export const AccumulateAttribute = makeAttribute({
	name: 'accumulate',
	propertyName: 'accumulate',
	title: 'Accumulate',
	types: [attributeValueEnum('none', 'sum')],
	default: 'none',
	appliesTo: ['animate', 'animateMotion', 'animateTransform'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/accumulate'
});
