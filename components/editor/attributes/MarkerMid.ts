import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const MarkerMid = makeAttribute({
	name: 'marker-mid',
	propertyName: 'markerMid',
	title: 'Marker Mid',
	types: [attributeValueString()],
	default: 'none',
	animatable: 'discrete',
	appliesTo: ['circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-mid'
});
