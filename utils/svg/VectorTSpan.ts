import {
	EditorAttributesAlignmentBaseline,
	EditorAttributesBaselineShift,
	EditorAttributesFill,
	EditorAttributesFillOpacity,
	EditorAttributesFillRule
} from '#components';
import { BaseGraphicsVectorElement } from './base/BaseGraphicsVectorElement';

export class VectorTSpan extends BaseGraphicsVectorElement<SVGTSpanElement, 'tspan'> {
	public constructor(element: SVGTSpanElement) {
		super({
			element,
			title: 'TSpan',
			inputs: [
				EditorAttributesFill,
				EditorAttributesFillOpacity,
				EditorAttributesFillRule,
				EditorAttributesAlignmentBaseline,
				EditorAttributesBaselineShift
			]
		});
	}
}
