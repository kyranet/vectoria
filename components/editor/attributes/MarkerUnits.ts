import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';

export const MarkerUnits = makeAttribute({
	name: 'markerUnits',
	propertyName: 'markerUnits',
	title: 'Marker Units',
	types: [attributeValueEnum('strokeWidth', 'userSpaceOnUse')],
	default: 'strokeWidth',
	animatable: true,
	appliesTo: ['marker'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/markerUnits'
});
