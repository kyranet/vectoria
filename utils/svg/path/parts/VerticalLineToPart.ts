import type { Coordinate } from '../../shared/Coordinate';
import type { VerticalLineTo } from '../VerticalLineTo';
import { BasePathPart } from '../base/BasePathPart';

export class VerticalLineToPart extends BasePathPart<VerticalLineTo> {
	/**
	 * The `y`-coordinate of the end point.
	 */
	public y: number;

	public constructor(parent: VerticalLineTo, start: Coordinate, data: VerticalLineToPart.Data) {
		super(parent, start);

		const offset = parent.isRelative() ? start.y : 0;
		this.y = data.y + offset;
	}

	public get end() {
		return { x: this.start.x, y: this.y };
	}

	public toString() {
		return this.y.toString();
	}
}

export namespace VerticalLineToPart {
	export interface Data {
		/**
		 * The `y`-coordinate of the end point.
		 */
		readonly y: number;
	}
}
