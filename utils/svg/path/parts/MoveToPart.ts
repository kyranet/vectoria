import type { Coordinate } from '../../shared/Coordinate';
import type { MoveTo } from '../MoveTo';
import { BasePathPart } from '../base/BasePathPart';

export class MoveToPart extends BasePathPart<MoveTo> {
	/**
	 * The `x`-coordinate of the end point.
	 */
	public readonly x: number;

	/**
	 * The `y`-coordinate of the end point.
	 */
	public readonly y: number;

	public constructor(parent: MoveTo, start: Coordinate, data: MoveToPart.Data) {
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

export namespace MoveToPart {
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
