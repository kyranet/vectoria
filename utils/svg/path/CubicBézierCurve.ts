import { IconPartCubicBezierCurve } from '#components';
import type { Peekable } from '@sapphire/iterator-utilities';
import type { VectorPath } from '../VectorPath';
import type { Coordinate } from '../shared/Coordinate';
import { BasePath } from './base/BasePath';
import { readNumber } from './parser/readNumber';
import { CubicBézierCurvePart } from './parts/CubicBézierCurvePart';

/**
 * Draw a cubic Bézier curve from the current point to the end point specified
 * by `x`,`y`. The start control point is specified by `x1`,`y1` and the end
 * control point is specified by `x2`,`y2`. Any subsequent triplet(s) of
 * coordinate pairs are interpreted as parameter(s) for implicit absolute cubic
 * Bézier curve (`C`) command(s).
 *
 * **Formulae**:
 * - P₀′ = Pₙ = {`x`, `y`} ;
 * - Pcs = {`x1`, `y1`} ;
 * - Pce = {`x2`, `y2`}
 *
 * **Formula**: P₀′ = Pₙ = {`x`, y₀}
 *
 * ---
 *
 * Draw a cubic Bézier curve from the current point to the end point, which is
 * the current point shifted by `dx` along the x-axis and `dy` along the y-axis.
 * The start control point is the current point (starting point of the curve)
 * shifted by `dx1` along the x-axis and `dy1` along the y-axis. The end control
 * point is the current point (starting point of the curve) shifted by `dx2`
 * along the x-axis and `dy2` along the y-axis. Any subsequent triplet(s) of
 * coordinate pairs are interpreted as parameter(s) for implicit relative cubic
 * Bézier curve (`c`) command(s).
 *
 * **Formulae**:
 * - P₀′ = Pₙ = {x₀ + `dx`, y₀ + `dy`} ;
 * - Pcs = {x₀ + `dx1`, y₀ + `dy1`} ;
 * - Pce = {x₀ + `dx2`, y₀ + `dy2`}
 */
export class CubicBézierCurve extends BasePath<'C' | 'c'> {
	public readonly entries: CubicBézierCurve.Part[];
	public readonly end: Coordinate;

	public constructor(type: 'C' | 'c', siblings: VectorPath.PathEntry[], previousCoordinate: Coordinate, entries: CubicBézierCurve.Data[]) {
		super(IconPartCubicBezierCurve, type, siblings, previousCoordinate);
		this.entries = [];

		let lastEndCoordinate = this.start;
		for (const entry of entries) {
			const part = new CubicBézierCurvePart(this, lastEndCoordinate, entry);
			this.entries.push(part);
			lastEndCoordinate = part.end;
		}

		this.end = lastEndCoordinate;
	}

	public isRelative(): boolean {
		return this.type === 'c';
	}

	public toString(): string {
		return this.formatString(this.entries);
	}

	public static parse(stream: Peekable<string>): CubicBézierCurve.Data {
		return {
			x1: readNumber(stream),
			y1: readNumber(stream),
			x2: readNumber(stream),
			y2: readNumber(stream),
			x: readNumber(stream),
			y: readNumber(stream)
		};
	}
}

export namespace CubicBézierCurve {
	export type Data = CubicBézierCurvePart.Data;
	export type Part = CubicBézierCurvePart;
}
