import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';

export const Dur = makeAttribute({
	name: 'dur',
	propertyName: 'dur',
	title: 'Dur',
	types: [attributeValueString(), attributeValueEnum('media', 'indefinite')],
	default: 'indefinite',
	animatable: false,
	appliesTo: ['animate', 'animateMotion', 'animateTransform', 'set'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dur'
});
