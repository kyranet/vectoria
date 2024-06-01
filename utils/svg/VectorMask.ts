import { EditorAttributesHeight } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorMask extends BaseVectorElement<SVGMaskElement, 'mask'> {
	public constructor(element: SVGMaskElement) {
		super({ element, title: 'Mask', inputs: [EditorAttributesHeight] });
	}
}
