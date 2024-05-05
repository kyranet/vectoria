import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFETile extends BaseVectorElement<SVGFETileElement, 'feTile'> {
	public constructor(element: SVGFETileElement) {
		super({ element, title: 'FE Tile' });
	}
}
