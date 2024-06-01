import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';

export const ColorInterpolationFilters = makeAttribute({
	name: 'color-interpolation-filters',
	propertyName: 'colorInterpolationFilters',
	title: 'Color Interpolation Filters',
	types: [attributeValueEnum('auto', 'sRGB', 'linearRGB')],
	default: 'linearRGB',
	animatable: 'discrete',
	appliesTo: [
		'feSpotLight',
		'feBlend',
		'feColorMatrix',
		'feComponentTransfer',
		'feComposite',
		'feConvolveMatrix',
		'feDiffuseLighting',
		'feDisplacementMap',
		'feDropShadow',
		'feFlood',
		'feGaussianBlur',
		'feImage',
		'feMerge',
		'feMorphology',
		'feOffset',
		'feSpecularLighting',
		'feTile',
		'feTurbulence'
	],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation-filters'
});
