import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';

export const LengthAdjust = makeAttribute({
	name: 'lengthAdjust',
	propertyName: 'lengthAdjust',
	title: 'Length Adjust',
	types: [attributeValueEnum('spacing', 'spacingAndGlyphs')],
	default: 'spacing',
	animatable: true,
	appliesTo: ['text', 'textPath', 'tspan'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lengthAdjust'
});
