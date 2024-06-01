import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';
import { VectorTagNames } from '../../../utils/svg/attributes/shared/constants';

export const Lang = makeAttribute({
	name: 'lang',
	propertyName: 'lang',
	title: 'Language',
	types: [attributeValueString()],
	default: null,
	animatable: false,
	appliesTo: VectorTagNames,
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lang'
});
