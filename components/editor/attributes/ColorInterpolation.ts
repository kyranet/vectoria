import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';

export const ColorInterpolation = makeAttribute({
	name: 'color-interpolation',
	propertyName: 'colorInterpolation',
	title: 'Color Interpolation',
	types: [attributeValueEnum('auto', 'sRGB', 'linearRGB')],
	default: 'sRGB',
	animatable: 'discrete',
	appliesTo: [
		'a',
		'animate',
		'circle',
		'clipPath',
		'defs',
		'ellipse',
		'foreignObject',
		'g',
		'image',
		'line',
		'linearGradient',
		'marker',
		'mask',
		'path',
		'pattern',
		'polygon',
		'polyline',
		'radialGradient',
		'rect',
		'svg',
		'switch',
		'symbol',
		'text',
		'textPath',
		'tspan',
		'use'
	],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation'
});
