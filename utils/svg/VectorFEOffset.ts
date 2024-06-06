import { EditorAttributesHeight, EditorAttributesWidth } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEOffset extends BaseVectorElement<SVGFEOffsetElement, 'feOffset'> {
	public constructor(element: SVGFEOffsetElement) {
		super({ element, title: 'FE Offset', inputs: [EditorAttributesWidth, EditorAttributesHeight] });
	}
}
