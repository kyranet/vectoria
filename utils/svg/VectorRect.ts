import { VectorPath } from './VectorPath';
import { BaseGeometryVectorElement } from './base/BaseGeometryVectorElement';

export class VectorRect extends BaseGeometryVectorElement<SVGRectElement> {
	public x: SVGLength;
	public y: SVGLength;
	public width: SVGLength;
	public height: SVGLength;

	public constructor(element: SVGRectElement) {
		super(element, 'Rectangle');
		this.x = element.x.baseVal;
		this.y = element.y.baseVal;
		this.width = element.width.baseVal;
		this.height = element.height.baseVal;
	}

	public toPath(): VectorPath {
		const element = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		const commands = `M ${this.x},${this.y} h ${this.width} v ${this.height} h -${this.width} Z`;
		element.setAttribute('d', commands);
		return new VectorPath(element);
	}
}
