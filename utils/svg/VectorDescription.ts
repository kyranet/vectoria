import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorDescription extends BaseVectorElement<SVGDescElement, 'desc'> {
	public constructor(element: SVGDescElement) {
		super({ element, title: 'Description' });
	}
}
