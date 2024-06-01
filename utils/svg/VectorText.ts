import { EditorAttributesFill, EditorAttributesFillOpacity, EditorAttributesFillRule } from '#components';
import { BaseGraphicsVectorElement } from './base/BaseGraphicsVectorElement';

export class VectorText extends BaseGraphicsVectorElement<SVGTextElement, 'text'> {
	public constructor(element: SVGTextElement) {
		super({ element, title: 'Text', inputs: [EditorAttributesFill, EditorAttributesFillOpacity, EditorAttributesFillRule] });
	}
}
