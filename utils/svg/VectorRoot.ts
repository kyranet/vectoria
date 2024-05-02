import { VectorPath } from './VectorPath';
import type { IVectorElement } from './base/IVectorElement';

export class VectorRoot implements IVectorElement {
	public readonly element: SVGSVGElement;
	public viewBox: DOMRect;
	public xmlns: string | undefined;
	public x: SVGLength;
	public y: SVGLength;
	public width: SVGLength;
	public height: SVGLength;
	public children!: IVectorElement[];

	public constructor(element: SVGSVGElement) {
		this.element = element;
		this.viewBox = element.viewBox.baseVal;
		this.xmlns = element.getAttribute('xmlns') ?? undefined;
		this.x = element.x.baseVal;
		this.y = element.y.baseVal;
		this.width = element.width.baseVal;
		this.height = element.height.baseVal;
		this.#onUpdateChildren();

		useMutationObserver(element, (mutations) => this.#onUpdate(mutations), {
			attributes: true,
			childList: true,
			subtree: false,
			attributeFilter: ['viewBox', 'xmlns', 'x', 'y', 'width', 'height']
		});
	}

	#onUpdate(mutations: MutationRecord[]) {
		for (const mutation of mutations) {
			if (mutation.type === 'attributes') {
				this.#onUpdateAttribute(mutation.attributeName!);
			} else if (mutation.type === 'childList') {
				this.#onUpdateChildren();
			}
		}
	}

	#onUpdateAttribute(name: string) {
		switch (name) {
			case 'viewBox':
				this.viewBox = this.element.viewBox.baseVal;
				break;
			case 'xmlns':
				this.xmlns = this.element.getAttribute('xmlns') ?? undefined;
				break;
			case 'x':
				this.x = this.element.x.baseVal;
				break;
			case 'y':
				this.y = this.element.y.baseVal;
				break;
			case 'width':
				this.width = this.element.width.baseVal;
				break;
			case 'height':
				this.height = this.element.height.baseVal;
				break;
		}
	}

	#onUpdateChildren() {
		this.children = [];
		for (const child of this.element.children) {
			if (child.tagName === 'path') this.children.push(new VectorPath(child as SVGPathElement));
		}
	}
}
