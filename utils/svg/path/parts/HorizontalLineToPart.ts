import type { Coordinate } from '../../shared/Coordinate';
import type { HorizontalLineTo } from '../HorizontalLineTo';
import { BasePathPart } from '../base/BasePathPart';

export class HorizontalLineToPart extends BasePathPart<HorizontalLineTo> {
	/**
	 * The `x`-coordinate of the end point.
	 */
	public x: number;

	public constructor(parent: HorizontalLineTo, start: Coordinate, data: HorizontalLineToPart.Data) {
		super(parent, start);

		const offset = parent.isRelative() ? start.x : 0;
		this.x = data.x + offset;
	}

	public get end() {
		return { x: this.x, y: this.start.y };
	}

	public toString() {
		return this.x.toString();
	}
}

export namespace HorizontalLineToPart {
	export interface Data {
		/**
		 * The `x`-coordinate of the end point.
		 */
		readonly x: number;
	}
}
