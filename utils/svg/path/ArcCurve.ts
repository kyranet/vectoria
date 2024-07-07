import { IconPartArcCurve } from '#components';
import type { Peekable } from '@sapphire/iterator-utilities';
import type { VectorPath } from '../VectorPath';
import type { Coordinate } from '../shared/Coordinate';
import { BasePath } from './base/BasePath';
import { readBooleanInteger } from './parser/readBooleanInteger';
import { readNumber } from './parser/readNumber';
import { ArcCurvePart } from './parts/ArcCurvePart';

/**
 * Draw an Arc curve from the current point to the coordinate `x`,`y`. The
 * center of the ellipse used to draw the arc is determined automatically based
 * on the other parameters of the command:
 *
 * - `rx` and `ry` are the two radii of the ellipse;
 * - `angle` represents a rotation (in degrees) of the ellipse relative to the
 *   x-axis;
 * - `large-arc-flag` and `sweep-flag` allows to chose which arc must be drawn
 *   as 4 possible arcs can be drawn out of the other parameters.
 *   - `large-arc-flag` allows a choice of large arc (`1`) or small arc (`0`),
 *   - `sweep-flag` allows a choice of a clockwise arc (`1`) or counterclockwise
 *     arc (`0`)
 *
 * The coordinate `x`,`y` becomes the new current point for the next command.
 * All subsequent sets of parameters are considered implicit absolute arc curve
 * (`A`) commands.
 *
 * ---
 *
 * Draw an Arc curve from the current point to a point for which coordinates are
 * those of the current point shifted by `dx` along the x-axis and `dy` along
 * the y-axis. The center of the ellipse used to draw the arc is determined
 * automatically based on the other parameters of the command:
 *
 * - `rx` and `ry` are the two radii of the ellipse;
 * - `angle` represents a rotation (in degrees) of the ellipse relative to the
 *   x-axis;
 * - `large-arc-flag` and `sweep-flag` allows to chose which arc must be drawn
 *   as 4 possible arcs can be drawn out of the other parameters.
 *   - `large-arc-flag` allows a choice of large arc (`1`) or small arc (`0`),
 *   - `sweep-flag` allows a choice of a clockwise arc (`1`) or counterclockwise
 *     arc (`0`)
 *
 * The current point gets its X and Y coordinates shifted by `dx` and `dy` for
 * the next command. All subsequent sets of parameters are considered implicit
 * relative arc curve (`a`) commands.
 */
export class ArcCurve extends BasePath<'A' | 'a'> {
	public readonly end: Coordinate;
	public readonly entries: ArcCurve.Part[];

	public constructor(type: 'A' | 'a', siblings: VectorPath.PathEntry[], previousCoordinate: Coordinate, entries: ArcCurve.Data[]) {
		super(IconPartArcCurve, type, siblings, previousCoordinate);
		this.entries = [];

		let lastEndCoordinate = this.start;
		for (const entry of entries) {
			const part = new ArcCurvePart(this, lastEndCoordinate, entry);
			this.entries.push(part);
			lastEndCoordinate = part.end;
		}

		this.end = lastEndCoordinate;
	}

	public isRelative(): boolean {
		return this.type === 'a';
	}

	public toString(): string {
		return this.formatString(this.entries);
	}

	public static parse(stream: Peekable<string>): ArcCurve.Data {
		return {
			rx: readNumber(stream),
			ry: readNumber(stream),
			angle: readNumber(stream),
			largeArcFlag: readBooleanInteger(stream),
			sweepFlag: readBooleanInteger(stream),
			x: readNumber(stream),
			y: readNumber(stream)
		};
	}
}

export namespace ArcCurve {
	export type Data = ArcCurvePart.Data;
	export type Part = ArcCurvePart;
}
