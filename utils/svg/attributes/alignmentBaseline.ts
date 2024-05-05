import { makeAttribute } from './base/makeAttribute';
import { attributeValueEnum } from './base/values/enum';

export const AlignmentBaselineAttribute = makeAttribute({
	name: 'alignment-baseline',
	propertyName: 'alignmentBaseline',
	title: 'Alignment Baseline',
	types: [
		attributeValueEnum('auto', 'baseline', 'middle', 'central', 'ideographic', 'alphabetic', 'hanging', 'mathematical', 'top', 'center', 'bottom')
	],
	default: 'auto',
	appliesTo: ['tspan', 'textPath'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline'
});
