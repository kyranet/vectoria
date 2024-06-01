import { EditorAttributesHeight } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEColorMatrix extends BaseVectorElement<SVGFEColorMatrixElement, 'feColorMatrix'> {
	public constructor(element: SVGFEColorMatrixElement) {
		super({ element, title: 'FE Color Matrix', inputs: [EditorAttributesHeight] });
	}
}
