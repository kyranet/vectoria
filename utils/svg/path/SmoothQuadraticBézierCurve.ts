import type { Peekable } from '@sapphire/iterator-utilities';
import type { VectorPath } from '../VectorPath';
import type { Coordinate } from '../shared/Coordinate';
import { BasePath } from './base/BasePath';
import { readNumber } from './parser/readNumber';
import { SmoothQuadraticBézierCurvePart } from './parts/SmoothQuadraticBézierCurvePart';

/**
 * Draw a smooth quadratic Bézier curve from the current point to the end point
 * specified by `x`,`y`. The control point is the reflection of the control
 * point of the previous curve command about the current point. If the previous
 * command wasn't a quadratic Bézier curve, the control point is the same as the
 * curve starting point (current point). Any subsequent coordinate pair(s) are
 * interpreted as parameter(s) for implicit absolute smooth quadratic Bézier
 * curve (`T`) command(s).
 *
 * **Formula**: P₀′ = Pₙ = {`x`, `y`}
 *
 * ---
 *
 * Draw a smooth quadratic Bézier curve from the current point to the end point,
 * which is the current point shifted by `dx` along the x-axis and `dy` along
 * the y-axis. The control point is the reflection of the control point of the
 * previous curve command about the current point. If the previous command
 * wasn't a quadratic Bézier curve, the control point is the same as the curve
 * starting point (current point). Any subsequent coordinate pair(s) are
 * interpreted as parameter(s) for implicit relative smooth quadratic Bézier
 * curve (`t`) command(s).
 *
 * **Formula**: P₀′ = Pₙ = {x₀ + `dx`, y₀ + `dy`}
 */
export class SmoothQuadraticBézierCurve extends BasePath<'T' | 't'> {
	public readonly end: Coordinate;
	public readonly entries: SmoothQuadraticBézierCurve.Part[];

	public constructor(
		type: 'T' | 't',
		siblings: VectorPath.PathEntry[],
		previousCoordinate: Coordinate,
		entries: SmoothQuadraticBézierCurve.Data[]
	) {
		super(type, siblings, previousCoordinate);
		this.entries = [];

		let lastEndCoordinate = this.start;
		for (const entry of entries) {
			const part = new SmoothQuadraticBézierCurvePart(this, lastEndCoordinate, entry);
			this.entries.push(part);
			lastEndCoordinate = part.end;
		}

		this.end = lastEndCoordinate;
	}

	public isRelative(): boolean {
		return this.type === 't';
	}

	public toString(): string {
		return this.formatString(this.entries);
	}

	public static parse(stream: Peekable<string>): SmoothQuadraticBézierCurve.Data {
		return {
			x: readNumber(stream),
			y: readNumber(stream)
		};
	}
}

export namespace SmoothQuadraticBézierCurve {
	export type Data = SmoothQuadraticBézierCurvePart.Data;
	export type Part = SmoothQuadraticBézierCurvePart;
}
