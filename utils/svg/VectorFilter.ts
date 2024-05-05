import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFilter extends BaseVectorElement<SVGFilterElement, 'filter'> {
	public constructor(element: SVGFilterElement) {
		super({ element, title: 'Filter' });
	}
}
