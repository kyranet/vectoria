import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const Elevation = makeAttribute({
	name: 'elevation',
	propertyName: 'elevation',
	title: 'Elevation',
	types: [attributeValueNumber()],
	default: 0,
	animatable: true,
	appliesTo: ['feDistantLight'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/elevation'
});
