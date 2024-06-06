import { EditorAttributesHeight, EditorAttributesWidth } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEComposite extends BaseVectorElement<SVGFECompositeElement, 'feComposite'> {
	public constructor(element: SVGFECompositeElement) {
		super({ element, title: 'FE Composite', inputs: [EditorAttributesWidth, EditorAttributesHeight] });
	}
}
