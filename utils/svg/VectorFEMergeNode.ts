import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEMergeNode extends BaseVectorElement<SVGFEMergeNodeElement, 'feMergeNode'> {
	public constructor(element: SVGFEMergeNodeElement) {
		super({ element, title: 'FE Merge Node' });
	}
}
