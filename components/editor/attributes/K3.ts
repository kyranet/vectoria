import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const K3 = makeAttribute({
	name: 'k3',
	propertyName: 'k3',
	title: 'Variable (3)',
	types: [attributeValueNumber()],
	default: 0,
	animatable: true,
	appliesTo: ['feComposite'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/k3'
});
