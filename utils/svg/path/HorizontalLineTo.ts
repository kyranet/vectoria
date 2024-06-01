import type { Peekable } from '@sapphire/iterator-utilities';
import type { VectorPath } from '../VectorPath';
import type { Coordinate } from '../shared/Coordinate';
import { BasePath } from './base/BasePath';
import { readNumber } from './parser/readNumber';
import { HorizontalLineToPart } from './parts/HorizontalLineToPart';

/**
 * Draw a horizontal line from the current point to the end point, which is
 * specified by the `x` parameter and the current point's `y` coordinate. Any
 * subsequent value(s) are interpreted as parameter(s) for implicit absolute
 * horizontal LineTo (`H`) command(s).
 *
 * **Formula**: P₀′ = Pₙ = {`x`, y₀}
 *
 * ---
 *
 * Draw a horizontal line from the current point to the end point, which is
 * specified by the current point shifted by `dx` along the x-axis and the
 * current point's `y` coordinate. Any subsequent value(s) are interpreted as
 * parameter(s) for implicit relative horizontal LineTo (`h`) command(s).
 *
 * **Formula**: P₀′ = Pₙ = {x₀ + `dx`, y₀}
 */
export class HorizontalLineTo extends BasePath<'H' | 'h'> {
	public readonly end: Coordinate;
	public readonly entries: HorizontalLineTo.Part[];

	public constructor(type: 'H' | 'h', siblings: VectorPath.PathEntry[], previousCoordinate: Coordinate, entries: HorizontalLineTo.Data[]) {
		super(type, siblings, previousCoordinate);
		this.entries = [];

		let lastEndCoordinate = this.start;
		for (const entry of entries) {
			const part = new HorizontalLineToPart(this, lastEndCoordinate, entry);
			this.entries.push(part);
			lastEndCoordinate = part.end;
		}

		this.end = lastEndCoordinate;
	}

	public isRelative(): boolean {
		return this.type === 'h';
	}

	public toString(): string {
		return this.formatString(this.entries);
	}

	public static parse(stream: Peekable<string>): HorizontalLineTo.Data {
		return {
			x: readNumber(stream)
		};
	}
}

export namespace HorizontalLineTo {
	export type Data = HorizontalLineToPart.Data;
	export type Part = HorizontalLineToPart;
}
