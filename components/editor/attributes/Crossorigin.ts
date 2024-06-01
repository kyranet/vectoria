import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';

export const Crossorigin = makeAttribute({
	name: 'crossorigin',
	propertyName: 'crossOrigin',
	title: 'Crossorigin',
	types: [attributeValueEnum('anonymous', 'use-credentials', '')],
	default: 'anonymous',
	animatable: false,
	appliesTo: ['image', 'feImage'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin'
});
