import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const FontFamily = makeAttribute({
	name: 'fontFamily',
	propertyName: 'fontFamily',
	title: 'Font Family',
	types: [attributeValueString()],
	default: null,
	animatable: true,
	appliesTo: ['text', 'textPath', 'tspan'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-family'
});
