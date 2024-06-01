import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const LightingColor = makeAttribute({
	name: 'lighting-color',
	propertyName: 'lightingColor',
	title: 'Lighting Color',
	types: [attributeValueString()],
	default: 'white',
	animatable: true,
	appliesTo: ['feDiffuseLighting', 'feSpecularLighting'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lighting-color'
});
