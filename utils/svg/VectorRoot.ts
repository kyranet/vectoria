import { EditorAttributesHeight } from '#components';
import { BaseGraphicsVectorElement } from './base/BaseGraphicsVectorElement';
import { BaseVectorElement } from './base/BaseVectorElement';
import { makeVectorElement } from './shared/makeVectorElement';

export class VectorRoot extends BaseGraphicsVectorElement<SVGSVGElement, 'svg'> {
	public viewBox: DOMRect;
	public xmlns: string | undefined;
	public x: SVGLength;
	public y: SVGLength;
	public width: SVGLength;
	public height: SVGLength;
	public children: BaseVectorElement<SVGElement, string>[];

	public constructor(element: SVGSVGElement) {
		super({ element, title: 'SVG', inputs: [EditorAttributesHeight] });
		this.viewBox = element.viewBox.baseVal;
		this.xmlns = element.getAttribute('xmlns') ?? undefined;
		this.x = element.x.baseVal;
		this.y = element.y.baseVal;
		this.width = element.width.baseVal;
		this.height = element.height.baseVal;
		this.children = [];

		for (const child of this.element.children) {
			this.children.push(makeVectorElement(child as SVGElement));
		}
	}
}
