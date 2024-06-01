import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';

export const FontWeight = makeAttribute({
	name: 'font-weight',
	propertyName: 'fontWeight',
	title: 'Font Weight',
	types: [attributeValueEnum('normal', 'bold', 'bolder', 'lighter', '100', '200', '300', '400', '500', '600', '700', '800', '900')],
	default: 'normal',
	animatable: true,
	appliesTo: ['text', 'tspan', 'textPath'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-weight'
});
