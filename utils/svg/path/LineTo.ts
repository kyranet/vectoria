import type { Peekable } from '@sapphire/iterator-utilities';
import type { VectorPath } from '../VectorPath';
import type { Coordinate } from '../shared/Coordinate';
import { BasePath } from './base/BasePath';
import { LineToPart } from './parts/LineToPart';
import { readNumber } from './parser/readNumber';

/**
 * Draw a line from the current point to the end point specified by `x`,`y`. Any
 * subsequent coordinate pair(s) are interpreted as parameter(s) for implicit
 * absolute LineTo (`L`) command(s).
 *
 * **Formula**: P₀′ = Pₙ = {`x`, `y`}
 *
 * ---
 *
 * Draw a line from the current point to the end point, which is the current
 * point shifted by `dx` along the x-axis and `dy` along the y-axis. Any
 * subsequent coordinate pair(s) are interpreted as parameter(s) for implicit
 * relative LineTo (`l`) command(s) (see below).
 *
 * **Formula**: P₀′ = Pₙ = {x₀ + `dx`, y₀ + `dy`}
 */
export class LineTo extends BasePath<'L' | 'l'> {
	public readonly end: Coordinate;
	public readonly entries: LineTo.Part[];

	public constructor(type: 'L' | 'l', siblings: VectorPath.PathEntry[], previousCoordinate: Coordinate, entries: LineTo.Data[]) {
		super(type, siblings, previousCoordinate);
		this.entries = [];

		let lastEndCoordinate = this.start;
		for (const entry of entries) {
			const part = new LineToPart(this, lastEndCoordinate, entry);
			this.entries.push(part);
			lastEndCoordinate = part.end;
		}

		this.end = lastEndCoordinate;
	}

	public isRelative(): boolean {
		return this.type === 'l';
	}

	public toString(): string {
		return this.formatString(this.entries);
	}

	public static parse(stream: Peekable<string>): LineTo.Data {
		return {
			x: readNumber(stream),
			y: readNumber(stream)
		};
	}
}

export namespace LineTo {
	export type Data = LineToPart.Data;
	export type Part = LineToPart;
}
