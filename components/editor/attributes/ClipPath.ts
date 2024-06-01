import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueBasicShapeWithGeometryBox } from '../../../utils/svg/attributes/base/values/basicShapeWithGeometryBox';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';
import { attributeValueUrl } from '../../../utils/svg/attributes/base/values/url';

export const ClipPath = makeAttribute({
	name: 'clip-path',
	propertyName: 'clipPath',
	title: 'Clip Path',
	types: [attributeValueEnum('none'), attributeValueUrl(), attributeValueBasicShapeWithGeometryBox()],
	default: 'none',
	animatable: true,
	appliesTo: [
		'a',
		'circle',
		'clipPath',
		'ellipse',
		'g',
		'image',
		'line',
		'marker',
		'mask',
		'path',
		'pattern',
		'polygon',
		'polyline',
		'rect',
		'svg',
		'symbol',
		'text',
		'use'
	],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-path'
});
