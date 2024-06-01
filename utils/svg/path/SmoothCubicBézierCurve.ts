import type { Peekable } from '@sapphire/iterator-utilities';
import type { VectorPath } from '../VectorPath';
import type { Coordinate } from '../shared/Coordinate';
import { BasePath } from './base/BasePath';
import { readNumber } from './parser/readNumber';
import { SmoothCubicBézierCurvePart } from './parts/SmoothCubicBézierCurvePart';

/**
 * Draw a smooth cubic Bézier curve from the current point to the end point
 * specified by `x`,`y`. The end control point is specified by `x2`,`y2`. The
 * start control point is the reflection of the end control point of the
 * previous curve command about the current point. If the previous command
 * wasn't a cubic Bézier curve, the start control point is the same as the curve
 * starting point (current point). Any subsequent pair(s) of coordinate pairs
 * are interpreted as parameter(s) for implicit absolute smooth cubic Bézier
 * curve (`S`) commands.
 *
 * ---
 *
 * Draw a smooth cubic Bézier curve from the current point to the end point,
 * which is the current point shifted by `dx` along the x-axis and `dy` along
 * the y-axis. The end control point is the current point (starting point of the
 * curve) shifted by `dx2` along the x-axis and `dy2` along the y-axis. The
 * start control point is the reflection of the end control point of the
 * previous curve command about the current point. If the previous command
 * wasn't a cubic Bézier curve, the start control point is the same as the curve
 * starting point (current point). Any subsequent pair(s) of coordinate pairs
 * are interpreted as parameter(s) for implicit relative smooth cubic Bézier
 * curve (`s`) commands.
 */
export class SmoothCubicBézierCurve extends BasePath<'S' | 's'> {
	public readonly end: Coordinate;
	public readonly entries: SmoothCubicBézierCurve.Part[];

	public constructor(type: 'S' | 's', siblings: VectorPath.PathEntry[], previousCoordinate: Coordinate, entries: SmoothCubicBézierCurve.Data[]) {
		super(type, siblings, previousCoordinate);
		this.entries = [];

		let lastEndCoordinate = this.start;
		for (const entry of entries) {
			const part = new SmoothCubicBézierCurvePart(this, lastEndCoordinate, entry);
			this.entries.push(part);
			lastEndCoordinate = part.end;
		}

		this.end = lastEndCoordinate;
	}

	public isRelative(): boolean {
		return this.type === 's';
	}

	public toString(): string {
		return this.formatString(this.entries);
	}

	public static parse(stream: Peekable<string>): SmoothCubicBézierCurve.Data {
		return {
			x2: readNumber(stream),
			y2: readNumber(stream),
			x: readNumber(stream),
			y: readNumber(stream)
		};
	}
}

export namespace SmoothCubicBézierCurve {
	export type Data = SmoothCubicBézierCurvePart.Data;
	export type Part = SmoothCubicBézierCurvePart;
}
