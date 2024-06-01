import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';

export const FontStyle = makeAttribute({
	name: 'fontStyle',
	propertyName: 'fontStyle',
	title: 'Font Style',
	types: [attributeValueEnum('normal', 'italic', 'oblique')],
	default: 'normal',
	animatable: true,
	appliesTo: ['text', 'textPath', 'tspan'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-style'
});
