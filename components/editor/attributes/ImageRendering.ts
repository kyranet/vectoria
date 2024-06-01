import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';

export const ImageRendering = makeAttribute({
	name: 'imageRendering',
	propertyName: 'imageRendering',
	title: 'Image Rendering',
	types: [attributeValueEnum('auto', 'optimizeSpeed', 'optimizeQuality')],
	default: 'auto',
	animatable: true,
	appliesTo: ['image'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/image-rendering'
});
