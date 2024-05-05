import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEPointLight extends BaseVectorElement<SVGFEPointLightElement, 'fePointLight'> {
	public constructor(element: SVGFEPointLightElement) {
		super({ element, title: 'FE Point Light' });
	}
}
