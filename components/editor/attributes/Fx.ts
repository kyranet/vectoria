import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueLength } from '../../../utils/svg/attributes/base/values/length';

export const Fx = makeAttribute({
	name: 'fx',
	propertyName: 'fx',
	title: 'X-axis Focal Point',
	types: [attributeValueLength()],
	default: null,
	animatable: false,
	appliesTo: ['radialGradient'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fx'
});
