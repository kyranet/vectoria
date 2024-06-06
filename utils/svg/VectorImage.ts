import { EditorAttributesDecoding, EditorAttributesHeight, EditorAttributesHref, EditorAttributesWidth } from '#components';
import { BaseGraphicsVectorElement } from './base/BaseGraphicsVectorElement';

export class VectorImage extends BaseGraphicsVectorElement<SVGImageElement, 'image'> {
	public constructor(element: SVGImageElement) {
		super({ element, title: 'Image', inputs: [EditorAttributesHref, EditorAttributesDecoding, EditorAttributesWidth, EditorAttributesHeight] });
	}
}
