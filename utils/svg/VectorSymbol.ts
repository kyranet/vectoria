import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorSymbol extends BaseVectorElement<SVGSymbolElement, 'symbol'> {
	public constructor(element: SVGSymbolElement) {
		super({ element, title: 'Symbol' });
	}
}
