import { BaseGraphicsVectorElement } from './base/BaseGraphicsVectorElement';
import { BaseVectorElement } from './base/BaseVectorElement';
import { makeVectorElement } from './shared/makeVectorElement';

export class VectorDefs extends BaseGraphicsVectorElement<SVGDefsElement> {
	public children: BaseVectorElement<SVGElement>[];

	public constructor(element: SVGDefsElement) {
		super(element, 'Definitions');

		this.children = [];
		for (const child of this.element.children) {
			this.children.push(makeVectorElement(child as SVGElement));
		}
	}
}
