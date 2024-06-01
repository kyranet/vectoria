import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const K4 = makeAttribute({
	name: 'k4',
	propertyName: 'k4',
	title: 'Variable (4)',
	types: [attributeValueNumber()],
	default: 0,
	animatable: true,
	appliesTo: ['feComposite'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/k4'
});
