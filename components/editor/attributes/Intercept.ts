import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const Intercept = makeAttribute({
	name: 'intercept',
	propertyName: 'intercept',
	title: 'Intercept',
	types: [attributeValueNumber()],
	default: 0,
	animatable: true,
	appliesTo: ['feFuncA', 'feFuncR', 'feFuncG', 'feFuncB'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/intercept'
});
