import { IconPartClosePath } from '#components';
import type { VectorPath } from '../VectorPath';
import type { Coordinate } from '../shared/Coordinate';
import { BasePath } from './base/BasePath';

/**
 * Close the current subpath by connecting the last point of the path with its
 * initial point. If the two points are at different coordinates, a straight
 * line is drawn between those two points.
 */
export class ClosePath extends BasePath<'Z' | 'z'> {
	public readonly end: Coordinate;

	public constructor(type: 'Z' | 'z', siblings: VectorPath.PathEntry[], previousCoordinate: Coordinate) {
		super(IconPartClosePath, type, siblings, previousCoordinate);
		this.end = siblings.length > 0 ? siblings[0].start : { x: 0, y: 0 };
	}

	public isRelative(): boolean {
		return this.type === 'z';
	}

	public toString(): string {
		return this.type;
	}

	public static parse(): null {
		return null;
	}
}
