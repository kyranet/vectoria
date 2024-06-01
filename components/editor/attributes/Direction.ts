import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';

export const Direction = makeAttribute({
	name: 'direction',
	propertyName: 'direction',
	title: 'Direction',
	types: [attributeValueEnum('ltr', 'rtl')],
	default: 'ltr',
	animatable: true,
	appliesTo: ['textPath', 'text', 'tspan'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/direction'
});
