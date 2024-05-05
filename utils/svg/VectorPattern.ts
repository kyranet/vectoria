import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorPattern extends BaseVectorElement<SVGPatternElement, 'pattern'> {
	public constructor(element: SVGPatternElement) {
		super({ element, title: 'Pattern' });
	}
}
