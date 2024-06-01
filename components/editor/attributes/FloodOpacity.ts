import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';
import { attributeValuePercentage } from '../../../utils/svg/attributes/base/values/percentage';

export const FloodOpacity = makeAttribute({
	name: 'flood-opacity',
	propertyName: 'floodOpacity',
	title: 'Flood Opacity',
	types: [attributeValueNumber(), attributeValuePercentage()],
	default: 1,
	animatable: true,
	appliesTo: ['feFlood', 'feDropShadow'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/flood-opacity'
});
