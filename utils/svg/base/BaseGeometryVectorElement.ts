import type { VectorPath } from '../VectorPath';
import { BaseGraphicsVectorElement } from './BaseGraphicsVectorElement';
import type { VectorElementOptions } from './BaseVectorElement';

export abstract class BaseGeometryVectorElement<Element extends SVGGeometryElement, TagName extends string> extends BaseGraphicsVectorElement<
	Element,
	TagName
> {
	private _pathLength: number;

	protected constructor(options: VectorElementOptions<Element>) {
		super(options);
		this._pathLength = options.element.pathLength.baseVal;
	}

	/**
	 * The length of the path.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/pathLength
	 */
	public get pathLength(): number {
		return this._pathLength;
	}

	public set pathLength(value: number) {
		this._pathLength = this.element.pathLength.baseVal = value;
	}

	/**
	 * Converts the shape to a path.
	 */
	public abstract toPath(): VectorPath;

	protected createPathElement(): SVGPathElement {
		const element = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		element.pathLength.baseVal = this.pathLength;
		for (const transform of this.element.transform.baseVal) {
			element.transform.baseVal.appendItem(transform);
		}

		return element;
	}
}
