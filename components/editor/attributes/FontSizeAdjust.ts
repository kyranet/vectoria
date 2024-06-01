import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const FontSizeAdjust = makeAttribute({
	name: 'font-size-adjust',
	propertyName: 'fontSizeAdjust',
	title: 'Font Size Adjust',
	types: [attributeValueNumber(), attributeValueEnum('none')],
	default: 'none',
	animatable: true,
	appliesTo: ['text', 'textPath', 'tspan'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-size-adjust'
});
