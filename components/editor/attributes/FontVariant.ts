import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const FontVariant = makeAttribute({
	name: 'font-variant',
	propertyName: 'fontVariant',
	title: 'Font Variant',
	types: [attributeValueString()],
	default: 'normal',
	animatable: true,
	appliesTo: ['text', 'textPath', 'tspan'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-variant'
});
