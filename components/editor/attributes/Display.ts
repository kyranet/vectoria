import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';
import { VectorTagNames } from '../../../utils/svg/attributes/shared/constants';

export const Display = makeAttribute({
	name: 'display',
	propertyName: 'display',
	title: 'Display',
	types: [attributeValueString()],
	default: 'inline',
	animatable: true,
	appliesTo: VectorTagNames,
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/display'
});
