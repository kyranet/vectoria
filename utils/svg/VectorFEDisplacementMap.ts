import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEDisplacementMap extends BaseVectorElement<SVGFEDisplacementMapElement, 'feDisplacementMap'> {
	public constructor(element: SVGFEDisplacementMapElement) {
		super({ element, title: 'FE Displacement Map' });
	}
}
