import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const DiffuseConstant = makeAttribute({
	name: 'diffuseConstant',
	propertyName: 'diffuseConstant',
	title: 'Diffuse Constant',
	types: [attributeValueNumber()],
	default: 1,
	animatable: true,
	appliesTo: ['feDiffuseLighting'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/diffuseConstant'
});
