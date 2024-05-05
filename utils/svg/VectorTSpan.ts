import { BaseGraphicsVectorElement } from './base/BaseGraphicsVectorElement';

export class VectorTSpan extends BaseGraphicsVectorElement<SVGTSpanElement, 'tspan'> {
	public constructor(element: SVGTSpanElement) {
		super({ element, title: 'TSpan' });
	}
}
