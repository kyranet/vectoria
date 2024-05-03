import { BaseGraphicsVectorElement } from './base/BaseGraphicsVectorElement';
import { BaseVectorElement } from './base/BaseVectorElement';
import { makeVectorElement } from './shared/makeVectorElement';

export class VectorG extends BaseGraphicsVectorElement<SVGGElement> {
	public children: BaseVectorElement<SVGElement>[];

	public constructor(element: SVGGElement) {
		super(element, 'Group');

		this.children = [];
		for (const child of this.element.children) {
			this.children.push(makeVectorElement(child as SVGElement));
		}
	}
}
