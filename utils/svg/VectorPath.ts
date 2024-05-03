import { peekable } from '@sapphire/iterator-utilities';
import { BaseGeometryVectorElement } from './base/BaseGeometryVectorElement';
import { ArcCurve } from './path/ArcCurve';
import { ClosePath } from './path/ClosePath';
import { CubicBézierCurve } from './path/CubicBézierCurve';
import { HorizontalLineTo } from './path/HorizontalLineTo';
import { LineTo } from './path/LineTo';
import { MoveTo } from './path/MoveTo';
import { QuadraticBézierCurve } from './path/QuadraticBézierCurve';
import { SmoothCubicBézierCurve } from './path/SmoothCubicBézierCurve';
import { SmoothQuadraticBézierCurve } from './path/SmoothQuadraticBézierCurve';
import { VerticalLineTo } from './path/VerticalLineTo';
import { trim } from './path/parser/trim';
import type { Coordinate } from './shared/Coordinate';

export class VectorPath extends BaseGeometryVectorElement<SVGPathElement> {
	public entries: VectorPath.PathEntry[];
	public start: Coordinate;
	public end: Coordinate;

	public constructor(element: SVGPathElement) {
		super(element, 'Path');
		this.entries = [];
		this.start = { x: 0, y: 0 };
		this.end = { x: 0, y: 0 };

		this.#parsePathData(element.getAttribute('d'));
	}

	public toPath(): VectorPath {
		return this;
	}

	#parsePathData(input: string | null | undefined) {
		if (!input) return;

		const reader = peekable(input);
		let previousCoordinate: Coordinate = { x: 0, y: 0 };
		while ((trim(reader), !reader.peek().done)) {
			const type = reader.next().value;
			const Command = this.#parsePathDataCommand(type);
			const data = [Command.parse(reader)];

			let result: IteratorResult<string>;
			while ((trim(reader), !(result = reader.peek()).done)) {
				if (this.#isCharacterCommand(result.value)) break;
				data.push(Command.parse(reader));
			}

			// @ts-expect-error Complex `type` is not assignable to string
			const entry = new Command(type, this, previousCoordinate, data);
			previousCoordinate = entry.end;
			this.entries.push(entry);

			if (this.entries.length === 1) this.start = entry.end;
		}

		if (this.entries.length > 0) this.end = this.entries.at(-1)!.end;
	}

	#parsePathDataCommand(command: string) {
		switch (command) {
			case 'M':
			case 'm':
				return MoveTo;
			case 'L':
			case 'l':
				return LineTo;
			case 'H':
			case 'h':
				return HorizontalLineTo;
			case 'V':
			case 'v':
				return VerticalLineTo;
			case 'C':
			case 'c':
				return CubicBézierCurve;
			case 'S':
			case 's':
				return SmoothCubicBézierCurve;
			case 'Q':
			case 'q':
				return QuadraticBézierCurve;
			case 'T':
			case 't':
				return SmoothQuadraticBézierCurve;
			case 'A':
			case 'a':
				return ArcCurve;
			case 'Z':
			case 'z':
				return ClosePath;
			default:
				throw new RangeError(`Unknown path command: ${command}`);
		}
	}

	#isCharacterCommand(char: string): boolean {
		return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
	}
}

export namespace VectorPath {
	export type PathEntry =
		| ArcCurve
		| ClosePath
		| CubicBézierCurve
		| HorizontalLineTo
		| LineTo
		| MoveTo
		| QuadraticBézierCurve
		| SmoothCubicBézierCurve
		| SmoothQuadraticBézierCurve
		| VerticalLineTo;
}
