import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';

export const ClipPathUnits = makeAttribute({
	name: 'clipPathUnits',
	propertyName: 'clipPathUnits',
	title: 'Clip Path Units',
	types: [attributeValueEnum('userSpaceOnUse', 'objectBoundingBox')],
	default: 'userSpaceOnUse',
	animatable: true,
	appliesTo: ['clipPath'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clipPathUnits'
});
