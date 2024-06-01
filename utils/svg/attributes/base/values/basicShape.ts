import { err, ok, type Result } from '@sapphire/result';
import type { ValueAttributeValue } from './base/makeAttributeValue';
import { parseLengthPercentage, type LengthPercentage } from './lengthPercentage';
import { parsePosition, type Position } from './position';
import { parseShapeRadius } from './shapeRadius';

export function attributeValueBasicShape(): ValueAttributeValue<BasicShape> {
	return {
		name: 'basic-shape',
		type: 'value',
		from: (value) => parseBasicShape(value),
		to: (value) => value.toString()
	};
}

export function parseBasicShape(value: string): Result<BasicShape, string> {
	const openingIndex = value.indexOf('(');
	if (openingIndex === -1) return err(`Expected '(' in the basic-shape value, received: '${value}'`);
	if (!value.endsWith(')')) return err(`Expected ')' in the basic-shape value, received: '${value}'`);

	const kind = value.slice(0, openingIndex);
	const content = value.slice(openingIndex + 1, -1);

	switch (kind) {
		case 'inset':
			return parseInset(content);
		case 'rect':
			return parseRect(content);
		case 'xywh':
			return parseXYWH(content);
		case 'circle':
			return parseCircle(content);
		case 'ellipse':
			return parseEllipse(content);
		case 'polygon':
			return parsePolygon(content);
		case 'path':
			return parsePath(content);
		default:
			return err(`Invalid basic-shape kind: '${kind}'`);
	}
}

function parseInset(value: string): Result<BasicShapeInset, string> {
	const parts = value.split(' ');
	const indexOfRound = parts.indexOf('round');
	if (indexOfRound === 0) return err(`Expected at least 1 value for the inset parameter, received: '${value}'`);
	if (indexOfRound > 4) return err(`Expected at most 4 values for the inset parameter, received: '${value}'`);

	const length = indexOfRound === -1 ? parts.length : indexOfRound;
	const parsed: LengthPercentage[] = [];
	for (let i = 0; i < length; i++) {
		const result = parseLengthPercentage(parts[i]);
		if (result.isErr()) return result;

		parsed.push(result.unwrap());
	}

	let top: LengthPercentage;
	let right: LengthPercentage;
	let bottom: LengthPercentage;
	let left: LengthPercentage;
	if (parsed.length === 1) {
		top = right = bottom = left = parsed[0];
	} else if (parsed.length === 2) {
		top = bottom = parsed[0];
		right = left = parsed[1];
	} else if (parsed.length === 3) {
		top = parsed[0];
		right = left = parsed[1];
		bottom = parsed[2];
	} else {
		top = parsed[0];
		right = parsed[1];
		bottom = parsed[2];
		left = parsed[3];
	}

	let round: Round;
	if (indexOfRound === -1) {
		round = {
			topLeft: { value: 0, unit: 'px' },
			topRight: { value: 0, unit: 'px' },
			bottomRight: { value: 0, unit: 'px' },
			bottomLeft: { value: 0, unit: 'px' }
		};
	} else {
		const parameters = parts.slice(indexOfRound + 1);
		if (parameters.length === 0) return err(`Expected at least 1 value for the round parameter, received: '${value}'`);
		if (parameters.length > 4) return err(`Expected at most 4 values for the round parameter, received: '${value}'`);

		const result = parseRound(parameters);
		if (result.isErr()) return result;

		round = result.unwrap();
	}

	return ok({ type: 'basic-shape', kind: 'inset', top, right, bottom, left, round });
}

function parseRect(value: string): Result<BasicShapeRect, string> {
	const parts = value.split(' ');
	const indexOfRound = parts.indexOf('round');
	const length = indexOfRound === -1 ? parts.length : indexOfRound;
	if (length !== 4) return err(`Expected 4 values for the rect parameter, received: '${value}'`);
	if (indexOfRound !== -1 && indexOfRound !== 4) return err(`Expected 4 values for the rect parameter, received: '${value}'`);

	const parsed: ('auto' | LengthPercentage)[] = [];
	for (let i = 0; i < length; i++) {
		if (parts[i] === 'auto') {
			parsed.push('auto');
		} else {
			const result = parseLengthPercentage(parts[i]);
			if (result.isErr()) return result;

			parsed.push(result.unwrap());
		}
	}

	return maybeParseRoundFromParts(parts, indexOfRound).map((round) => ({
		type: 'basic-shape',
		kind: 'rect',
		top: parsed[0],
		right: parsed[1],
		bottom: parsed[2],
		left: parsed[3],
		round
	}));
}

function parseXYWH(value: string): Result<BasicShapeXYWH, string> {
	const parts = value.split(' ');
	const indexOfRound = parts.indexOf('round');
	const length = indexOfRound === -1 ? parts.length : indexOfRound;
	if (length !== 4) return err(`Expected 4 values for the rect parameter, received: '${value}'`);
	if (indexOfRound !== -1 && indexOfRound !== 4) return err(`Expected 4 values for the rect parameter, received: '${value}'`);

	const parsed: LengthPercentage[] = [];
	for (let i = 0; i < length; i++) {
		const result = parseLengthPercentage(parts[i]);
		if (result.isErr()) return result;

		parsed.push(result.unwrap());
	}

	return maybeParseRoundFromParts(parts, indexOfRound).map((round) => ({
		type: 'basic-shape',
		kind: 'xywh',
		x: parsed[0],
		y: parsed[1],
		width: parsed[2],
		height: parsed[3],
		round
	}));
}

function parseCircle(value: string): Result<BasicShapeCircle, string> {
	const parts = value.split(' ');
	const indexOfAt = parts.indexOf('at');
	const length = indexOfAt === -1 ? parts.length : indexOfAt;
	if (length !== 1) return err(`Expected 1 value for the circle radius, received: '${value}'`);

	const radius = parseShapeRadius(parts[0]);
	if (radius.isErr()) return radius;

	return maybeParsePositionFromParts(parts, indexOfAt).map((position) => ({
		type: 'basic-shape',
		kind: 'circle',
		r: radius.unwrap(),
		position
	}));
}

function parseEllipse(value: string): Result<BaseShapeEllipse, string> {
	const parts = value.split(' ');
	const indexOfAt = parts.indexOf('at');
	const length = indexOfAt === -1 ? parts.length : indexOfAt;
	if (length !== 2) return err(`Expected 2 values for the ellipse radius, received: '${value}'`);

	const rx = parseShapeRadius(parts[0]);
	if (rx.isErr()) return rx;

	const ry = parseShapeRadius(parts[1]);
	if (ry.isErr()) return ry;

	return maybeParsePositionFromParts(parts, indexOfAt).map((position) => ({
		type: 'basic-shape',
		kind: 'ellipse',
		rx: rx.unwrap(),
		ry: ry.unwrap(),
		position
	}));
}

function parsePolygon(value: string): Result<BaseShapePolygon, string> {
	const parts = value.split(' ', 2);
	const nonZero = parts[0] === 'nonzero';
	const evenOdd = parts[0] === 'evenodd';

	let index = 0;
	let fillRule: 'nonzero' | 'evenodd';
	if (nonZero || evenOdd) {
		fillRule = nonZero ? 'nonzero' : 'evenodd';
		index = 1;
	} else {
		fillRule = 'nonzero';
	}

	const points: [LengthPercentage, LengthPercentage][] = [];
	for (const point of parts[index].split(',')) {
		const [x, y] = point.split(' ', 2);
		const xResult = parseLengthPercentage(x);
		if (xResult.isErr()) return xResult;

		const yResult = parseLengthPercentage(y);
		if (yResult.isErr()) return yResult;

		points.push([xResult.unwrap(), yResult.unwrap()]);
	}

	return ok({ type: 'basic-shape', kind: 'polygon', fillRule, points });
}

function parsePath(value: string): Result<BaseShapePath, string> {
	const parts = value.split(' ', 3);
	const nonZero = parts[0] === 'nonzero';
	const evenOdd = parts[0] === 'evenodd';
	if (nonZero || evenOdd) {
		if (parts.length < 3) return err(`Expected at least 3 values for the path parameter, received: '${value}'`);
		if (parts[1] !== ',') return err(`Expected ',' after the fill rule, received: '${value}'`);

		const path = parts.slice(2).join(' ');
		return ok({ type: 'basic-shape', kind: 'path', fillRule: nonZero ? 'nonzero' : 'evenodd', path });
	}

	return ok({ type: 'basic-shape', kind: 'path', fillRule: 'nonzero', path: value });
}

function parseRound(parts: string[]): Result<Round, string> {
	const parsed: LengthPercentage[] = [];
	for (const part of parts) {
		const result = parseLengthPercentage(part);
		if (result.isErr()) return result;

		parsed.push(result.unwrap());
	}

	// If we have 1 value, it's the same for all corners:
	if (parsed.length === 1) return ok({ topLeft: parsed[0], topRight: parsed[0], bottomRight: parsed[0], bottomLeft: parsed[0] });
	// If we have 2 values, the first is for the top corners, the second for the
	// bottom corners:
	if (parsed.length === 2) return ok({ topLeft: parsed[0], topRight: parsed[1], bottomRight: parsed[0], bottomLeft: parsed[1] });
	// If we have 3 values, the first is for the top-left corner, the second for
	// the top-right and bottom-left corners, the third for the bottom-right
	// corner:
	if (parsed.length === 3) return ok({ topLeft: parsed[0], topRight: parsed[1], bottomRight: parsed[2], bottomLeft: parsed[1] });
	// If we have 4 values, the first is for the top-left corner, the second for
	// the top-right corner, the third for the bottom-right corner, the fourth
	// for the bottom-left corner:
	return ok({ topLeft: parsed[0], topRight: parsed[1], bottomRight: parsed[2], bottomLeft: parsed[3] });
}

function maybeParseRoundFromParts(parts: string[], index: number): Result<Round, string> {
	if (index === -1) {
		return ok({
			topLeft: { value: 0, unit: 'px' },
			topRight: { value: 0, unit: 'px' },
			bottomRight: { value: 0, unit: 'px' },
			bottomLeft: { value: 0, unit: 'px' }
		});
	}

	const parameters = parts.slice(index + 1);
	if (parameters.length === 0) return err('Expected at least 1 value for the round parameter');
	if (parameters.length > 4) return err('Expected at most 4 values for the round parameter');

	return parseRound(parameters);
}

function maybeParsePositionFromParts(parts: string[], index: number): Result<Position, string> {
	if (index === -1) return ok({ x: 'center', offsetX: { value: 0, unit: null }, y: 'center', offsetY: { value: 0, unit: null } });

	return parsePosition(parts.slice(index + 1).join(' '));
}

export type BasicShape = BasicShapeInset | BasicShapeRect | BasicShapeXYWH | BasicShapeCircle | BaseShapeEllipse | BaseShapePolygon | BaseShapePath;

interface BaseBasicShape {
	type: 'basic-shape';
}

interface BasicShapeInset extends BaseBasicShape {
	kind: 'inset';
	top: LengthPercentage;
	right: LengthPercentage;
	bottom: LengthPercentage;
	left: LengthPercentage;
	round: Round;
}

interface BasicShapeRect extends BaseBasicShape {
	kind: 'rect';
	top: 'auto' | LengthPercentage;
	right: 'auto' | LengthPercentage;
	bottom: 'auto' | LengthPercentage;
	left: 'auto' | LengthPercentage;
	round: Round;
}

interface BasicShapeXYWH extends BaseBasicShape {
	kind: 'xywh';
	x: LengthPercentage;
	y: LengthPercentage;
	width: LengthPercentage;
	height: LengthPercentage;
	round: Round;
}

interface BasicShapeCircle extends BaseBasicShape {
	kind: 'circle';
	r: 'closest-side' | 'farthest-side' | LengthPercentage;
	position: Position;
}

interface BaseShapeEllipse extends BaseBasicShape {
	kind: 'ellipse';
	rx: 'closest-side' | 'farthest-side' | LengthPercentage;
	ry: 'closest-side' | 'farthest-side' | LengthPercentage;
	position: Position;
}

interface BaseShapePolygon extends BaseBasicShape {
	kind: 'polygon';
	fillRule: 'nonzero' | 'evenodd';
	points: [LengthPercentage, LengthPercentage][];
}

interface BaseShapePath extends BaseBasicShape {
	kind: 'path';
	fillRule: 'nonzero' | 'evenodd';
	path: string;
}

interface Round {
	topLeft: LengthPercentage;
	topRight: LengthPercentage;
	bottomRight: LengthPercentage;
	bottomLeft: LengthPercentage;
}
