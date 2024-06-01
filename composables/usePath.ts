import { peekable } from '@sapphire/iterator-utilities';
import type { VectorPath } from '~/utils/svg/VectorPath';
import { ArcCurve } from '~/utils/svg/path/ArcCurve';
import { ClosePath } from '~/utils/svg/path/ClosePath';
import { CubicBézierCurve } from '~/utils/svg/path/CubicBézierCurve';
import { HorizontalLineTo } from '~/utils/svg/path/HorizontalLineTo';
import { LineTo } from '~/utils/svg/path/LineTo';
import { MoveTo } from '~/utils/svg/path/MoveTo';
import { QuadraticBézierCurve } from '~/utils/svg/path/QuadraticBézierCurve';
import { SmoothCubicBézierCurve } from '~/utils/svg/path/SmoothCubicBézierCurve';
import { SmoothQuadraticBézierCurve } from '~/utils/svg/path/SmoothQuadraticBézierCurve';
import { VerticalLineTo } from '~/utils/svg/path/VerticalLineTo';
import { trim } from '~/utils/svg/path/parser/trim';
import type { Coordinate } from '~/utils/svg/shared/Coordinate';

export function usePathData(value: SVGPathElement) {
	return parsePathData(value.getAttribute('d'));
}

function parsePathData(input: string | null | undefined): VectorPath.PathEntry[] {
	const entries = [] as VectorPath.PathEntry[];
	if (!input) return entries;

	let start: Coordinate = { x: 0, y: 0 };
	let end: Coordinate = { x: 0, y: 0 };

	const reader = peekable(input);
	let previousCoordinate: Coordinate = { x: 0, y: 0 };
	while ((trim(reader), !reader.peek().done)) {
		const type = reader.next().value;
		const Command = parsePathDataCommand(type);
		const data = [Command.parse(reader)];

		let result: IteratorResult<string>;
		while ((trim(reader), !(result = reader.peek()).done)) {
			if (isCharacterCommand(result.value)) break;
			data.push(Command.parse(reader));
		}

		// @ts-expect-error Complex `type` is not assignable to string
		const entry = new Command(type, entries, previousCoordinate, data);
		previousCoordinate = entry.end;
		entries.push(entry);

		if (entries.length === 1) start = entry.end;
	}

	if (entries.length > 0) end = entries.at(-1)!.end;

	return entries;
}

function parsePathDataCommand(command: string) {
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

function isCharacterCommand(char: string): boolean {
	return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
}
