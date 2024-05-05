import { BaseGraphicsVectorElement } from './base/BaseGraphicsVectorElement';

export class VectorTextPath extends BaseGraphicsVectorElement<SVGTextPathElement, 'textPath'> {
	public constructor(element: SVGTextPathElement) {
		super({ element, title: 'Text Path' });
	}
}
