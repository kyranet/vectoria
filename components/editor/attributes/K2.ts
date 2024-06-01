import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const K2 = makeAttribute({
	name: 'k2',
	propertyName: 'k2',
	title: 'Variable (2)',
	types: [attributeValueNumber()],
	default: 0,
	animatable: true,
	appliesTo: ['feComposite'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/k2'
});
