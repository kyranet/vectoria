import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEBlend extends BaseVectorElement<SVGFEBlendElement, 'feBlend'> {
	public constructor(element: SVGFEBlendElement) {
		super({ element, title: 'FE Blend' });
	}
}
