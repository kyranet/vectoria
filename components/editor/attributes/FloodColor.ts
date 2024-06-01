import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const FloodColor = makeAttribute({
	name: 'flood-color',
	propertyName: 'floodColor',
	title: 'Flood Color',
	types: [attributeValueString()],
	default: 'black',
	animatable: true,
	appliesTo: ['feFlood', 'feDropShadow'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/flood-color'
});
