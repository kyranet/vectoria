import { EditorAttributesHeight } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEConvolveMatrix extends BaseVectorElement<SVGFEConvolveMatrixElement, 'feConvolveMatrix'> {
	public constructor(element: SVGFEConvolveMatrixElement) {
		super({ element, title: 'FE Convolve Matrix', inputs: [EditorAttributesHeight] });
	}
}
