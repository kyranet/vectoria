import { BaseGraphicsVectorElement } from './base/BaseGraphicsVectorElement';

export class VectorUse extends BaseGraphicsVectorElement<SVGUseElement, 'use'> {
	public x: SVGLength;
	public y: SVGLength;
	public width: SVGLength;
	public height: SVGLength;
	public href: string;

	public constructor(element: SVGUseElement) {
		super({ element, title: 'Use' });
		this.x = element.x.baseVal;
		this.y = element.y.baseVal;
		this.width = element.width.baseVal;
		this.height = element.height.baseVal;
		this.href = element.href.baseVal;
	}
}
