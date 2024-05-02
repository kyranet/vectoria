import type { Coordinate } from '../../shared/Coordinate';
import type { SmoothQuadraticBézierCurve } from '../SmoothQuadraticBézierCurve';
import { BasePathPart } from '../base/BasePathPart';

export class SmoothQuadraticBézierCurvePart extends BasePathPart<SmoothQuadraticBézierCurve> {
	/**
	 * The `x`-coordinate of the control point.
	 */
	public readonly x: number;
	/**
	 * The `y`-coordinate of the control point.
	 */
	public readonly y: number;

	public constructor(parent: SmoothQuadraticBézierCurve, start: Coordinate, data: SmoothQuadraticBézierCurvePart.Data) {
		super(parent, start);

		const offset = parent.isRelative() ? start : { x: 0, y: 0 };
		this.x = data.x + offset.x;
		this.y = data.y + offset.y;
	}

	public get end(): Coordinate {
		return { x: this.x, y: this.y };
	}

	public toString(): string {
		return `${this.x},${this.y}`;
	}
}

export namespace SmoothQuadraticBézierCurvePart {
	export interface Data {
		/**
		 * The `x`-coordinate of the control point.
		 */
		readonly x: number;
		/**
		 * The `y`-coordinate of the control point.
		 */
		readonly y: number;
	}
}
