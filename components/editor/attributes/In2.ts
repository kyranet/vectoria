import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const In2 = makeAttribute({
	name: 'in2',
	propertyName: 'in2',
	title: 'Input (2)',
	types: [attributeValueString()],
	default: null,
	animatable: true,
	appliesTo: ['feBlend', 'feComposite', 'feDisplacementMap'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in2'
});
