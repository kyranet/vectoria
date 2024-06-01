import { EditorAttributesHeight } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';
import { makeVectorElement } from './shared/makeVectorElement';

export class VectorFilter extends BaseVectorElement<SVGFilterElement, 'filter'> {
	public children: BaseVectorElement<SVGElement, string>[];

	public constructor(element: SVGFilterElement) {
		super({ element, title: 'Filter', inputs: [EditorAttributesHeight] });
		this.children = [];

		for (const child of this.element.children) {
			this.children.push(makeVectorElement(child as SVGElement));
		}
	}
}
