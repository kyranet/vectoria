import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEMerge extends BaseVectorElement<SVGFEMergeElement, 'feMerge'> {
	public constructor(element: SVGFEMergeElement) {
		super({ element, title: 'FE Merge' });
	}
}
