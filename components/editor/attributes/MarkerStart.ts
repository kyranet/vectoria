import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const MarkerStart = makeAttribute({
	name: 'marker-start',
	propertyName: 'markerStart',
	title: 'Marker Start',
	types: [attributeValueString()],
	default: 'none',
	animatable: 'discrete',
	appliesTo: ['circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-start'
});
