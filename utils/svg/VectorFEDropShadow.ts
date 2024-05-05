import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEDropShadow extends BaseVectorElement<SVGFEDropShadowElement, 'feDropShadow'> {
	public constructor(element: SVGFEDropShadowElement) {
		super({ element, title: 'FE Drop Shadow' });
	}
}
