import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorStyle extends BaseVectorElement<SVGStyleElement, 'style'> {
	public constructor(element: SVGStyleElement) {
		super({ element, title: 'Style' });
	}
}
