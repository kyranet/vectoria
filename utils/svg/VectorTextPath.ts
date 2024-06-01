import {
	EditorAttributesAlignmentBaseline,
	EditorAttributesBaselineShift,
	EditorAttributesFill,
	EditorAttributesFillOpacity,
	EditorAttributesFillRule,
	EditorAttributesHref
} from '#components';
import { BaseGraphicsVectorElement } from './base/BaseGraphicsVectorElement';

export class VectorTextPath extends BaseGraphicsVectorElement<SVGTextPathElement, 'textPath'> {
	public constructor(element: SVGTextPathElement) {
		super({
			element,
			title: 'Text Path',
			inputs: [
				EditorAttributesFill,
				EditorAttributesFillOpacity,
				EditorAttributesFillRule,
				EditorAttributesAlignmentBaseline,
				EditorAttributesBaselineShift,
				EditorAttributesHref
			]
		});
	}
}
