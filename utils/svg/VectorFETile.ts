import { EditorAttributesHeight, EditorAttributesWidth } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFETile extends BaseVectorElement<SVGFETileElement, 'feTile'> {
	public constructor(element: SVGFETileElement) {
		super({ element, title: 'FE Tile', inputs: [EditorAttributesWidth, EditorAttributesHeight] });
	}
}
