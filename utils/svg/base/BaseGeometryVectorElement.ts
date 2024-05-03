import type { VectorPath } from '../VectorPath';
import { BaseGraphicsVectorElement } from './BaseGraphicsVectorElement';

export abstract class BaseGeometryVectorElement<Element extends SVGGeometryElement> extends BaseGraphicsVectorElement<Element> {
	public pathLength: number;

	public constructor(element: Element, name: string, icon: Component | null = null) {
		super(element, name, icon);
		this.pathLength = element.pathLength.baseVal;
	}

	/**
	 * Converts the shape to a path.
	 */
	public abstract toPath(): VectorPath;
}
