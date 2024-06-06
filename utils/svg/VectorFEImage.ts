import { EditorAttributesHeight, EditorAttributesHref, EditorAttributesWidth } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEImage extends BaseVectorElement<SVGFEImageElement, 'feImage'> {
	public constructor(element: SVGFEImageElement) {
		super({ element, title: 'FE Image', inputs: [EditorAttributesHref, EditorAttributesWidth, EditorAttributesHeight] });
	}
}
