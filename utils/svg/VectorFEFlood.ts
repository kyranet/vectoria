import { EditorAttributesHeight, EditorAttributesWidth } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEFlood extends BaseVectorElement<SVGFEFloodElement, 'feFlood'> {
	public constructor(element: SVGFEFloodElement) {
		super({ element, title: 'FE Flood', inputs: [EditorAttributesWidth, EditorAttributesHeight] });
	}
}
