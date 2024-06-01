import { EditorAttributesHeight } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEMorphology extends BaseVectorElement<SVGFEMorphologyElement, 'feMorphology'> {
	public constructor(element: SVGFEMorphologyElement) {
		super({ element, title: 'FE Morphology', inputs: [EditorAttributesHeight] });
	}
}
