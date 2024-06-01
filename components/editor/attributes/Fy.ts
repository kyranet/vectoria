import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueLength } from '../../../utils/svg/attributes/base/values/length';

export const Fy = makeAttribute({
	name: 'fy',
	propertyName: 'fy',
	title: 'Y-axis Focal Point',
	types: [attributeValueLength()],
	default: null,
	animatable: false,
	appliesTo: ['radialGradient'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fy'
});
