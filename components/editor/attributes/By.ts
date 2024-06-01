import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';

// TODO: Add types
export const By = makeAttribute({
	name: 'by',
	propertyName: 'by',
	title: 'By',
	types: [],
	default: null,
	animatable: false,
	appliesTo: ['animate', 'animateMotion', 'animateTransform'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/by'
});
