import { IconElementGroup } from '#components';
import { BaseGraphicsVectorElement } from './base/BaseGraphicsVectorElement';
import { BaseVectorElement } from './base/BaseVectorElement';
import { makeVectorElement } from './shared/makeVectorElement';

export class VectorG extends BaseGraphicsVectorElement<SVGGElement, 'g'> {
	public children: BaseVectorElement<SVGElement, string>[];

	public constructor(element: SVGGElement) {
		super({ icon: IconElementGroup, element, title: 'Group' });

		this.children = [];
		for (const child of this.element.children) {
			this.children.push(makeVectorElement(child as SVGElement));
		}
	}
}
