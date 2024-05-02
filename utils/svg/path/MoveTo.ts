import type { Peekable } from '@sapphire/iterator-utilities';
import type { VectorPath } from '../VectorPath';
import type { Coordinate } from '../shared/Coordinate';
import { BasePath } from './base/BasePath';
import { readNumber } from './parser/readNumber';
import { MoveToPart } from './parts/MoveToPart';

/**
 * Move the current point to the coordinate `x`,`y`. Any subsequent coordinate
 * pair(s) are interpreted as parameter(s) for implicit absolute LineTo (`L`)
 * command(s) (see below).
 *
 * **Formula**: Pn = {`x`, `y`}
 *
 * ---
 *
 * Move the current point by shifting the last known position of the path by `dx`
 * along the x-axis and by `dy` along the y-axis. Any subsequent coordinate
 * pair(s) are interpreted as parameter(s) for implicit relative LineTo (`l`)
 * command(s) (see below).
 *
 * **Formula**: Pₙ = {x₀ + `dx`, y₀ + `dy`}
 */
export class MoveTo extends BasePath<'M' | 'm'> {
	public readonly end: Coordinate;
	public readonly entries: MoveTo.Part[];

	public constructor(type: 'M' | 'm', parent: VectorPath, previousCoordinate: Coordinate, entries: MoveTo.Data[]) {
		super(type, parent, previousCoordinate);
		this.entries = [];

		let lastEndCoordinate = this.start;
		for (const entry of entries) {
			const part = new MoveToPart(this, lastEndCoordinate, entry);
			this.entries.push(part);
			lastEndCoordinate = part.end;
		}

		this.end = lastEndCoordinate;
	}

	public isRelative(): boolean {
		return this.type === 'm';
	}

	public toString(): string {
		return this.formatString(this.entries);
	}

	public static parse(stream: Peekable<string>): MoveTo.Data {
		return {
			x: readNumber(stream),
			y: readNumber(stream)
		};
	}
}

export namespace MoveTo {
	export type Data = MoveToPart.Data;
	export type Part = MoveToPart;
}
