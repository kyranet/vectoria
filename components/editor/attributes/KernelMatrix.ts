import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const KernelMatrix = makeAttribute({
	name: 'kernelMatrix',
	propertyName: 'kernelMatrix',
	title: 'Kernel Matrix',
	types: [attributeValueString()],
	default: null,
	animatable: false,
	appliesTo: ['feConvolveMatrix'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/kernelMatrix'
});
