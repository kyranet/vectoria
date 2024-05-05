import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorMotionPath extends BaseVectorElement<SVGMPathElement, 'mpath'> {
	public constructor(element: SVGMPathElement) {
		super({ element, title: 'Motion Path' });
	}
}
