import type { Coordinate } from '../../shared/Coordinate';
import type { ArcCurve } from '../ArcCurve';
import { BasePathPart } from '../base/BasePathPart';

export class ArcCurvePart extends BasePathPart<ArcCurve> {
	/**
	 * The `x`-radius of the ellipse.
	 */
	public readonly rx: number;

	/**
	 * The `y`-radius of the ellipse.
	 */
	public readonly ry: number;

	/**
	 * The rotation (in degrees) of the ellipse relative to the x-axis.
	 */
	public readonly angle: number;

	/**
	 * The large-arc-flag allows a choice of large arc (`1`) or small arc (`0`).
	 */
	public readonly largeArcFlag: boolean;

	/**
	 * The sweep-flag allows a choice of a clockwise arc (`1`) or counterclockwise arc (`0`).
	 */
	public readonly sweepFlag: boolean;

	/**
	 * The `x`-coordinate of the end point.
	 */
	public readonly x: number;

	/**
	 * The `y`-coordinate of the end point.
	 */
	public readonly y: number;

	public constructor(parent: ArcCurve, start: Coordinate, data: ArcCurvePart.Data) {
		super(parent, start);

		const offset = parent.isRelative() ? start : { x: 0, y: 0 };
		this.rx = data.rx + offset.x;
		this.ry = data.ry + offset.y;
		this.angle = data.angle;
		this.largeArcFlag = data.largeArcFlag;
		this.sweepFlag = data.sweepFlag;
		this.x = data.x + offset.x;
		this.y = data.y + offset.y;
	}

	public get end(): Coordinate {
		return { x: this.x, y: this.y };
	}

	public toString(): string {
		return `${this.rx} ${this.ry} ${this.angle} ${this.largeArcFlag ? 1 : 0} ${this.sweepFlag ? 1 : 0} ${this.x},${this.y}`;
	}
}

export namespace ArcCurvePart {
	export interface Data {
		/**
		 * The `x`-radius of the ellipse.
		 */
		readonly rx: number;

		/**
		 * The `y`-radius of the ellipse.
		 */
		readonly ry: number;

		/**
		 * The rotation (in degrees) of the ellipse relative to the x-axis.
		 */
		readonly angle: number;

		/**
		 * The large-arc-flag allows a choice of large arc (`1`) or small arc (`0`).
		 */
		readonly largeArcFlag: boolean;

		/**
		 * The sweep-flag allows a choice of a clockwise arc (`1`) or counterclockwise arc (`0`).
		 */
		readonly sweepFlag: boolean;

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
