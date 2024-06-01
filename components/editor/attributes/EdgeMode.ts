import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';

export const EdgeMode = makeAttribute({
	name: 'edgeMode',
	propertyName: 'edgeMode',
	title: 'Edge Mode',
	types: [attributeValueEnum('duplicate', 'wrap', 'none')],
	default: (tag) => Defaults[tag],
	animatable: true,
	appliesTo: ['feConvolveMatrix', 'feGaussianBlur'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/edgeMode'
});

const Defaults = {
	feConvolveMatrix: 'duplicate',
	feGaussianBlur: 'none'
} as const;
