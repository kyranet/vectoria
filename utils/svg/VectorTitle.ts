import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorTitle extends BaseVectorElement<SVGTitleElement, 'title'> {
	public constructor(element: SVGTitleElement) {
		super({ element, title: 'Title' });
	}
}
