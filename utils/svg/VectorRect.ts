import { EditorAttributesFill, EditorAttributesFillOpacity, EditorAttributesHeight, EditorAttributesWidth } from '#components';
import { VectorPath } from './VectorPath';
import { BaseGeometryVectorElement } from './base/BaseGeometryVectorElement';
import { setLength } from './shared/setLength';

export class VectorRect extends BaseGeometryVectorElement<SVGRectElement, 'rect'> {
	private _x: SVGLength;
	private _y: SVGLength;
	private _width: SVGLength;
	private _height: SVGLength;
	private _rx: SVGLength;
	private _ry: SVGLength;

	public constructor(element: SVGRectElement) {
		super({
			element,
			title: 'Rectangle',
			inputs: [EditorAttributesWidth, EditorAttributesHeight, EditorAttributesFill, EditorAttributesFillOpacity]
		});
		this._x = element.x.baseVal;
		this._y = element.y.baseVal;
		this._width = element.width.baseVal;
		this._height = element.height.baseVal;
		this._rx = element.rx.baseVal;
		this._ry = element.ry.baseVal;
	}

	/**
	 * The x-axis coordinate of the rectangle.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x
	 */
	public get x(): SVGLength {
		return this._x;
	}

	public set x(value: SVGLength | number) {
		this._x = setLength(this.element.x.baseVal, value);
	}

	/**
	 * The y-axis coordinate of the rectangle.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y
	 */
	public get y(): SVGLength {
		return this._y;
	}

	public set y(value: SVGLength | number) {
		this._y = setLength(this.element.y.baseVal, value);
	}

	/**
	 * The width of the rectangle.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width
	 */
	public get width(): SVGLength {
		return this._width;
	}

	public set width(value: SVGLength | number) {
		this._width = setLength(this.element.width.baseVal, value);
	}

	/**
	 * The height of the rectangle.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height
	 */
	public get height(): SVGLength {
		return this._height;
	}

	public set height(value: SVGLength | number) {
		this._height = setLength(this.element.height.baseVal, value);
	}

	/**
	 * The x-axis radius of the ellipse used to round off the corners of the rectangle.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/rx
	 */
	public get rx(): SVGLength {
		return this._rx;
	}

	public set rx(value: SVGLength | number) {
		this._rx = setLength(this.element.rx.baseVal, value);
	}

	/**
	 * The y-axis radius of the ellipse used to round off the corners of the rectangle.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/ry
	 */
	public get ry(): SVGLength {
		return this._ry;
	}

	public set ry(value: SVGLength | number) {
		this._ry = setLength(this.element.ry.baseVal, value);
	}

	public toPath(): VectorPath {
		const element = this.createPathElement();
		if (this.rx.value > 0 || this.ry.value > 0) {
			const rx = Math.min(this.rx.value, this.width.value / 2);
			const ry = Math.min(this.ry.value, this.height.value / 2);
			const commands = `M ${this.x.value + rx},${this.y.value} h ${this.width.value - 2 * rx} a ${rx},${ry} 0 0 1 ${rx},${ry} v ${this.height.value - 2 * ry} a ${rx},${ry} 0 0 1 -${rx},${ry} h -${this.width.value - 2 * rx} a ${rx},${ry} 0 0 1 -${rx},-${ry} v -${this.height.value - 2 * ry} a ${rx},${ry} 0 0 1 ${rx},-${ry} Z`;
			element.setAttribute('d', commands);
		} else {
			const commands = `M ${this.x},${this.y} h ${this.width} v ${this.height} h -${this.width} Z`;
			element.setAttribute('d', commands);
		}
		return new VectorPath(element);
	}
}
