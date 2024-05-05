import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEOffset extends BaseVectorElement<SVGFEOffsetElement, 'feOffset'> {
	public constructor(element: SVGFEOffsetElement) {
		super({ element, title: 'FE Offset' });
	}
}
