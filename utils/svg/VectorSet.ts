import { BaseAnimationElement } from './base/BaseAnimationElement';

export class VectorSet extends BaseAnimationElement<SVGSetElement, 'set'> {
	public constructor(element: SVGSetElement) {
		super({ element, title: 'Set' });
	}
}
