import { VectorPath } from './VectorPath';
import { BaseGeometryVectorElement } from './base/BaseGeometryVectorElement';

export class VectorCircle extends BaseGeometryVectorElement<SVGCircleElement> {
	public cx: SVGLength;
	public cy: SVGLength;
	public r: SVGLength;

	public constructor(element: SVGCircleElement) {
		super(element, 'Circle');
		this.cx = element.cx.baseVal;
		this.cy = element.cy.baseVal;
		this.r = element.r.baseVal;
	}

	public toPath(): VectorPath {
		const element = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		const commands = [
			`M ${this.cx.value - this.r.value},${this.cy.value}`,
			`a ${this.r.value},${this.r.value} 0 1,0 ${this.r.value * 2},0`,
			`a ${this.r.value},${this.r.value} 0 1,0 -${this.r.value * 2},0`
		];
		element.setAttribute('d', commands.join(' '));
		return new VectorPath(element);
	}
}
