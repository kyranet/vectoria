import type { Coordinate } from '../../shared/Coordinate';
import type { LineTo } from '../LineTo';
import { BasePathPart } from '../base/BasePathPart';

export class LineToPart extends BasePathPart<LineTo> {
	/**
	 * The `x`-coordinate of the end point.
	 */
	public readonly x: number;

	/**
	 * The `y`-coordinate of the end point.
	 */
	public readonly y: number;

	public constructor(parent: LineTo, start: Coordinate, data: LineToPart.Data) {
		super(parent, start);

		const offset = parent.isRelative() ? start : { x: 0, y: 0 };
		this.x = data.x + offset.x;
		this.y = data.y + offset.y;
	}

	public get end() {
		return { x: this.x, y: this.y };
	}

	public toString() {
		return `${this.x},${this.y}`;
	}
}

export namespace LineToPart {
	export interface Data {
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
