import type { Coordinate } from '../../shared/Coordinate';
import type { SmoothCubicBézierCurve } from '../SmoothCubicBézierCurve';
import { BasePathPart } from '../base/BasePathPart';

export class SmoothCubicBézierCurvePart extends BasePathPart<SmoothCubicBézierCurve> {
	/**
	 * The `x`-coordinate of the end control point.
	 */
	public readonly x2: number;
	/**
	 * The `y`-coordinate of the end control point.
	 */
	public readonly y2: number;
	/**
	 * The `x`-coordinate of the end point.
	 */
	public readonly x: number;
	/**
	 * The `y`-coordinate of the end point.
	 */
	public readonly y: number;

	public constructor(parent: SmoothCubicBézierCurve, start: Coordinate, data: SmoothCubicBézierCurvePart.Data) {
		super(parent, start);

		const offset = parent.isRelative() ? start : { x: 0, y: 0 };
		this.x2 = data.x2 + offset.x;
		this.y2 = data.y2 + offset.y;
		this.x = data.x + offset.x;
		this.y = data.y + offset.y;
	}

	public get end(): Coordinate {
		return { x: this.x, y: this.y };
	}

	public toString(): string {
		return `${this.x2},${this.y2} ${this.x},${this.y}`;
	}
}

export namespace SmoothCubicBézierCurvePart {
	export interface Data {
		/**
		 * The `x`-coordinate of the end control point.
		 */
		readonly x2: number;
		/**
		 * The `y`-coordinate of the end control point.
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
