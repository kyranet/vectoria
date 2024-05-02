import type { Coordinate } from '../../shared/Coordinate';
import type { QuadraticBézierCurve } from '../QuadraticBézierCurve';
import { BasePathPart } from '../base/BasePathPart';

export class QuadraticBézierCurvePart extends BasePathPart<QuadraticBézierCurve> {
	/**
	 * The `x`-coordinate of the control point.
	 */
	public readonly x1: number;

	/**
	 * The `y`-coordinate of the control point.
	 */
	public readonly y1: number;

	/**
	 * The `x`-coordinate of the end point.
	 */
	public readonly x: number;

	/**
	 * The `y`-coordinate of the end point.
	 */
	public readonly y: number;

	public constructor(parent: QuadraticBézierCurve, start: Coordinate, data: QuadraticBézierCurvePart.Data) {
		super(parent, start);

		const offset = parent.isRelative() ? start : { x: 0, y: 0 };
		this.x1 = data.x1 + offset.x;
		this.y1 = data.y1 + offset.y;
		this.x = data.x + offset.x;
		this.y = data.y + offset.y;
	}

	public get end(): Coordinate {
		return { x: this.x, y: this.y };
	}

	public toString(): string {
		return `${this.x1},${this.y1} ${this.x},${this.y}`;
	}
}

export namespace QuadraticBézierCurvePart {
	export interface Data {
		/**
		 * The `x`-coordinate of the control point.
		 */
		readonly x1: number;

		/**
		 * The `y`-coordinate of the control point.
		 */
		readonly y1: number;

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
