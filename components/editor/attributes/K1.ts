import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const K1 = makeAttribute({
	name: 'k1',
	propertyName: 'k1',
	title: 'Variable (1)',
	types: [attributeValueNumber()],
	default: 0,
	animatable: true,
	appliesTo: ['feComposite'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/k1'
});
