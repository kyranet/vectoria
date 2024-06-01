import type { Coordinate } from '../../shared/Coordinate';
import type { CubicBézierCurve } from '../CubicBézierCurve';
import { BasePathPart } from '../base/BasePathPart';

export class CubicBézierCurvePart extends BasePathPart<CubicBézierCurve> {
	/**
	 * The `x`-coordinate of the first control point.
	 */
	public x1: number;
	/**
	 * The `y`-coordinate of the first control point.
	 */
	public y1: number;
	/**
	 * The `x`-coordinate of the second control point.
	 */
	public x2: number;
	/**
	 * The `y`-coordinate of the second control point.
	 */
	public y2: number;
	/**
	 * The `x`-coordinate of the end point.
	 */
	public x: number;
	/**
	 * The `y`-coordinate of the end point.
	 */
	public y: number;

	public constructor(parent: CubicBézierCurve, start: Coordinate, data: CubicBézierCurvePart.Data) {
		super(parent, start);

		const offset = parent.isRelative() ? start : { x: 0, y: 0 };
		this.x1 = data.x1 + offset.x;
		this.y1 = data.y1 + offset.y;
		this.x2 = data.x2 + offset.x;
		this.y2 = data.y2 + offset.y;
		this.x = data.x + offset.x;
		this.y = data.y + offset.y;
	}

	public get end(): Coordinate {
		return { x: this.x, y: this.y };
	}

	public toString(): string {
		return `${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x},${this.y}`;
	}
}

export namespace CubicBézierCurvePart {
	export interface Data {
		/**
		 * The `x`-coordinate of the first control point.
		 */
		readonly x1: number;
		/**
		 * The `y`-coordinate of the first control point.
		 */
		readonly y1: number;
		/**
		 * The `x`-coordinate of the second control point.
		 */
		readonly x2: number;
		/**
		 * The `y`-coordinate of the second control point.
		 */
		readonly y2: number;
		/**
		 * The `x`-coordinate of the end point.
		 */
		readonly x: number;
		/**
		 * The `y`-coordinate of the end point.
		 */
		readonly y: number;
	}
}
