import type { Peekable } from '@sapphire/iterator-utilities';
import type { VectorPath } from '../VectorPath';
import type { Coordinate } from '../shared/Coordinate';
import { BasePath } from './base/BasePath';
import { readNumber } from './parser/readNumber';
import { VerticalLineToPart } from './parts/VerticalLineToPart';

/**
 * Draw a vertical line from the current point to the end point, which is
 * specified by the `y` parameter and the current point's `x` coordinate. Any
 * subsequent values are interpreted as parameters for implicit absolute
 * vertical LineTo (`V`) command(s).
 *
 * **Formula**: P₀′ = Pₙ = {x₀, `y`}
 *
 * ---
 *
 * Draw a vertical line from the current point to the end point, which is
 * specified by the current point shifted by `dy` along the y-axis and the
 * current point's `x` coordinate. Any subsequent value(s) are interpreted as
 * parameter(s) for implicit relative vertical LineTo (`v`) command(s).
 *
 * **Formula**: P₀′ = Pₙ = {x₀, y₀ + `dy`}
 */
export class VerticalLineTo extends BasePath<'V' | 'v'> {
	public readonly end: Coordinate;
	public readonly entries: VerticalLineTo.Part[];

	public constructor(type: 'V' | 'v', siblings: VectorPath.PathEntry[], previousCoordinate: Coordinate, entries: VerticalLineTo.Data[]) {
		super(type, siblings, previousCoordinate);
		this.entries = [];

		let lastEndCoordinate = this.start;
		for (const entry of entries) {
			const part = new VerticalLineToPart(this, lastEndCoordinate, entry);
			this.entries.push(part);
			lastEndCoordinate = part.end;
		}

		this.end = lastEndCoordinate;
	}

	public isRelative(): boolean {
		return this.type === 'v';
	}

	public toString(): string {
		return this.formatString(this.entries);
	}

	public static parse(stream: Peekable<string>): VerticalLineTo.Data {
		return {
			y: readNumber(stream)
		};
	}
}

export namespace VerticalLineTo {
	export type Data = VerticalLineToPart.Data;
	export type Part = VerticalLineToPart;
}
