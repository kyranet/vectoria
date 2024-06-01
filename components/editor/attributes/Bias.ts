import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueNumberRange } from '../../../utils/svg/attributes/base/values/numberRange';

export const Bias = makeAttribute({
	name: 'bias',
	propertyName: 'bias',
	title: 'Bias',
	types: [attributeValueNumberRange(0, 1)],
	default: 0,
	animatable: true,
	appliesTo: ['feConvolveMatrix'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/bias'
});
