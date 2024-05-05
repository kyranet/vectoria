import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorView extends BaseVectorElement<SVGViewElement, 'view'> {
	public constructor(element: SVGViewElement) {
		super({ element, title: 'View' });
	}
}
