import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueLengthPercentage } from '../../../utils/svg/attributes/base/values/lengthPercentage';

export const Fr = makeAttribute({
	name: 'fr',
	propertyName: 'fr',
	title: 'Focal Point Radius',
	types: [attributeValueLengthPercentage()],
	default: { value: 0, unit: null },
	animatable: true,
	appliesTo: ['radialGradient'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fr'
});
