import type { Peekable } from '@sapphire/iterator-utilities';
import type { VectorPath } from '../VectorPath';
import type { Coordinate } from '../shared/Coordinate';
import { BasePath } from './base/BasePath';
import { readNumber } from './parser/readNumber';
import { QuadraticBézierCurvePart } from './parts/QuadraticBézierCurvePart';

/**
 * Draw a quadratic Bézier curve from the current point to the end point
 * specified by `x`,`y`. The control point is specified by `x1`,`y1`. Any
 * subsequent pair(s) of coordinate pairs are interpreted as parameter(s) for
 * implicit absolute quadratic Bézier curve (`Q`) command(s).
 *
 * **Formulae**:
 * - P₀′ = Pₙ = {`x`, `y`} ;
 * - Pc = {`x1`, `y1`}
 *
 * ---
 *
 * Draw a quadratic Bézier curve from the current point to the end point, which
 * is the current point shifted by `dx` along the x-axis and `dy` along the
 * y-axis. The control point is the current point (starting point of the curve)
 * shifted by `dx1` along the x-axis and `dy1` along the y-axis. Any subsequent
 * pair(s) of coordinate pairs are interpreted as parameter(s) for implicit
 * relative quadratic Bézier curve (`q`) command(s).
 *
 * **Formulae**:
 * - P_o′ = Pₙ = {x₀ + `dx`, y₀ + `dy`} ;
 * - Pc = {x₀ + `dx1`, y₀ + `dy1`}
 */
export class QuadraticBézierCurve extends BasePath<'Q' | 'q'> {
	public readonly end: Coordinate;
	public readonly entries: QuadraticBézierCurve.Part[];

	public constructor(type: 'Q' | 'q', siblings: VectorPath.PathEntry[], previousCoordinate: Coordinate, entries: QuadraticBézierCurve.Data[]) {
		super(type, siblings, previousCoordinate);
		this.entries = [];

		let lastEndCoordinate = this.start;
		for (const entry of entries) {
			const part = new QuadraticBézierCurvePart(this, lastEndCoordinate, entry);
			this.entries.push(part);
			lastEndCoordinate = part.end;
		}

		this.end = lastEndCoordinate;
	}

	public isRelative(): boolean {
		return this.type === 'q';
	}

	public toString(): string {
		return this.formatString(this.entries);
	}

	public static parse(stream: Peekable<string>): QuadraticBézierCurve.Data {
		return {
			x1: readNumber(stream),
			y1: readNumber(stream),
			x: readNumber(stream),
			y: readNumber(stream)
		};
	}
}

export namespace QuadraticBézierCurve {
	export type Data = QuadraticBézierCurvePart.Data;
	export type Part = QuadraticBézierCurvePart;
}
