import { EditorAttributesFill, EditorAttributesFillOpacity, EditorAttributesFillRule } from '#components';
import { VectorPath } from './VectorPath';
import { BaseGeometryVectorElement } from './base/BaseGeometryVectorElement';

export class VectorPolyline extends BaseGeometryVectorElement<SVGPolylineElement, 'polyline'> {
	public readonly points: SVGPointList;

	public constructor(element: SVGPolylineElement) {
		super({ element, title: 'Polyline', inputs: [EditorAttributesFill, EditorAttributesFillOpacity, EditorAttributesFillRule] });
		this.points = element.points;
	}

	public toPath(): VectorPath {
		const element = this.createPathElement();
		const commands: string[] = [];
		for (let i = 0; i < this.points.numberOfItems; i++) {
			const point = this.points.getItem(i);
			commands.push(i === 0 ? `M ${point.x},${point.y}` : `${point.x},${point.y}`);
		}
		element.setAttribute('d', commands.join(' '));
		return new VectorPath(element);
	}
}
