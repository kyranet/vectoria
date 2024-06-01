import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';

export const DominantBaseline = makeAttribute({
	name: 'dominantBaseline',
	propertyName: 'dominantBaseline',
	title: 'Dominant Baseline',
	types: [attributeValueEnum('auto', 'text-bottom', 'alphabetic', 'ideographic', 'middle', 'central', 'mathematical', 'hanging', 'text-top')],
	default: 'auto',
	animatable: 'discrete',
	appliesTo: ['text', 'textPath', 'tspan'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dominant-baseline'
});
