import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const In = makeAttribute({
	name: 'in',
	propertyName: 'in',
	title: 'Input',
	types: [attributeValueString()],
	default: null,
	animatable: true,
	appliesTo: [
		'feBlend',
		'feColorMatrix',
		'feComponentTransfer',
		'feComposite',
		'feConvolveMatrix',
		'feDiffuseLighting',
		'feDisplacementMap',
		'feDropShadow',
		'feGaussianBlur',
		'feMergeNode',
		'feMorphology',
		'feOffset',
		'feSpecularLighting',
		'feTile'
	],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in'
});
