import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorClipPath extends BaseVectorElement<SVGClipPathElement, 'clipPath'> {
	public constructor(element: SVGClipPathElement) {
		super({ element, title: 'Clip Path' });
	}
}
