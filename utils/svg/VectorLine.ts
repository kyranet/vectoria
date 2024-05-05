import { VectorPath } from './VectorPath';
import { BaseGeometryVectorElement } from './base/BaseGeometryVectorElement';
import { setLength } from './shared/setLength';

export class VectorLine extends BaseGeometryVectorElement<SVGLineElement, 'line'> {
	private _x1: SVGLength;
	private _y1: SVGLength;
	private _x2: SVGLength;
	private _y2: SVGLength;

	public constructor(element: SVGLineElement) {
		super({ element, title: 'Line' });
		this._x1 = element.x1.baseVal;
		this._y1 = element.y1.baseVal;
		this._x2 = element.x2.baseVal;
		this._y2 = element.y2.baseVal;
	}

	/**
	 * The x-axis coordinate of the start of the line.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x1
	 */
	public get x1(): SVGLength {
		return this._x1;
	}

	public set x1(value: SVGLength | number) {
		this._x1 = setLength(this.element.x1.baseVal, value);
	}

	/**
	 * The y-axis coordinate of the start of the line.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y1
	 */
	public get y1(): SVGLength {
		return this._y1;
	}

	public set y1(value: SVGLength | number) {
		this._y1 = setLength(this.element.y1.baseVal, value);
	}

	/**
	 * The x-axis coordinate of the end of the line.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x2
	 */
	public get x2(): SVGLength {
		return this._x2;
	}

	public set x2(value: SVGLength | number) {
		this._x2 = setLength(this.element.x2.baseVal, value);
	}

	/**
	 * The y-axis coordinate of the end of the line.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y2
	 */
	public get y2(): SVGLength {
		return this._y2;
	}

	public set y2(value: SVGLength | number) {
		this._y2 = setLength(this.element.y2.baseVal, value);
	}

	public toPath(): VectorPath {
		const element = this.createPathElement();
		element.setAttribute('d', `M ${this.x1.value},${this.y1.value} ${this.x2.value},${this.y2.value}`);
		return new VectorPath(element);
	}
}
