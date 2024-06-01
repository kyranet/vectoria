import { EditorAttributesFill, EditorAttributesFillOpacity } from '#components';
import { VectorPath } from './VectorPath';
import { BaseGeometryVectorElement } from './base/BaseGeometryVectorElement';

export class VectorCircle extends BaseGeometryVectorElement<SVGCircleElement, 'circle'> {
	public cx: SVGLength;
	public cy: SVGLength;
	public r: SVGLength;

	public constructor(element: SVGCircleElement) {
		super({ element, title: 'Circle', inputs: [EditorAttributesFill, EditorAttributesFillOpacity] });
		this.cx = element.cx.baseVal;
		this.cy = element.cy.baseVal;
		this.r = element.r.baseVal;
	}

	public toPath(): VectorPath {
		const element = this.createPathElement();
		const commands = [
			`M ${this.cx.value - this.r.value},${this.cy.value}`,
			`a ${this.r.value},${this.r.value} 0 1,0 ${this.r.value * 2},0`,
			`a ${this.r.value},${this.r.value} 0 1,0 -${this.r.value * 2},0`
		];
		element.setAttribute('d', commands.join(' '));
		return new VectorPath(element);
	}
}
