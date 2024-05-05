import { VectorPath } from './VectorPath';
import { BaseGeometryVectorElement } from './base/BaseGeometryVectorElement';

export class VectorEllipse extends BaseGeometryVectorElement<SVGEllipseElement, 'ellipse'> {
	public cx: SVGLength;
	public cy: SVGLength;
	public rx: SVGLength;
	public ry: SVGLength;

	public constructor(element: SVGEllipseElement) {
		super({ element, title: 'Ellipse' });
		this.cx = element.cx.baseVal;
		this.cy = element.cy.baseVal;
		this.rx = element.rx.baseVal;
		this.ry = element.ry.baseVal;
	}

	public toPath(): VectorPath {
		const element = this.createPathElement();
		const commands = [
			`M ${this.cx.value - this.rx.value},${this.cy.value}`,
			`a ${this.rx.value},${this.ry.value} 0 1,0 ${this.rx.value * 2},0`,
			`a ${this.rx.value},${this.ry.value} 0 1,0 -${this.rx.value * 2},0`
		];
		element.setAttribute('d', commands.join(' '));
		return new VectorPath(element);
	}
}
