import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';
import { attributeValueLength } from '../../../utils/svg/attributes/base/values/length';

export const LetterSpacing = makeAttribute({
	name: 'letterSpacing',
	propertyName: 'letterSpacing',
	title: 'Letter Spacing',
	types: [attributeValueEnum('normal'), attributeValueLength()],
	default: 'normal',
	animatable: true,
	appliesTo: ['text', 'textPath', 'tspan'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/letter-spacing'
});
