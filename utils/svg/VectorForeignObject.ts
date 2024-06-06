import { EditorAttributesHeight, EditorAttributesWidth } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorForeignObject extends BaseVectorElement<SVGForeignObjectElement, 'foreignObject'> {
	public constructor(element: SVGForeignObjectElement) {
		super({ element, title: 'Foreign Object', inputs: [EditorAttributesWidth, EditorAttributesHeight] });
	}
}
