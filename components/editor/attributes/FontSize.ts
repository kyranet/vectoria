import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const FontSize = makeAttribute({
	name: 'font-size',
	propertyName: 'fontSize',
	title: 'Font Size',
	types: [attributeValueString()],
	default: 'medium',
	animatable: true,
	appliesTo: ['text', 'textPath', 'tspan'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-size'
});
