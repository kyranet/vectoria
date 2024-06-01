import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const Exponent = makeAttribute({
	name: 'exponent',
	propertyName: 'exponent',
	title: 'Exponent',
	types: [attributeValueNumber()],
	default: 1,
	animatable: true,
	appliesTo: ['feFuncA', 'feFuncB', 'feFuncG', 'feFuncR'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/exponent'
});
