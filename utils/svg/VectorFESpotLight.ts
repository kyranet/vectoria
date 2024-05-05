import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFESpotLight extends BaseVectorElement<SVGFESpotLightElement, 'feSpotLight'> {
	public constructor(element: SVGFESpotLightElement) {
		super({ element, title: 'FE Spot Light' });
	}
}
