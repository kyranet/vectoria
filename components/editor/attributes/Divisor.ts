import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const Divisor = makeAttribute({
	name: 'divisor',
	propertyName: 'divisor',
	title: 'Divisor',
	types: [attributeValueNumber()],
	default: 1,
	animatable: true,
	appliesTo: ['feConvolveMatrix'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/divisor'
});
