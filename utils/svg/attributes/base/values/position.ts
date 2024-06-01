import { err, ok, type Result } from '@sapphire/result';
import type { ValueAttributeValue } from './base/makeAttributeValue';
import { parseLengthPercentage } from './lengthPercentage';
import type { Length } from './shared/parseLength';
import type { Percentage } from './shared/parsePercentage';

export function attributeValuePosition(): ValueAttributeValue<Position> {
	return {
		name: 'position',
		type: 'value',
		from: (value) => parsePosition(value),
		to: (value) => {
			if (value.x === 'center' && value.y === 'center') {
				return value.offsetX.value === 0 && value.offsetY.value === 0 //
					? `${value.offsetX.toString()} ${value.offsetY.toString()}`
					: 'center';
			}

			return value.offsetX.value === 0 && value.offsetY.value === 0
				? value.x === 'center'
					? value.y
					: `${value.x} ${value.y}`
				: `${value.x} ${value.offsetX.toString()} ${value.y} ${value.offsetY.toString()}`;
		}
	};
}

export function parsePosition(value: string): Result<Position, string> {
	const parts = value.split(' ');
	if (parts.length === 1) return parse1Value(parts[0]);
	if (parts.length === 2) return parse2Value(parts[0], parts[1]);
	if (parts.length === 4) return parse4Value(parts[0], parts[1], parts[2], parts[3]);
	return err(`Expected 1, 2, or 4 values, received: ${value}`);
}

function parse1Value(value: string): Result<Position, string> {
	if (xAxis.includes(value as XAxis)) {
		return ok({ x: value as XAxis, y: 'center', offsetX: { value: 0, unit: null }, offsetY: { value: 0, unit: null } });
	}

	if (yAxis.includes(value as YAxis)) {
		return ok({ x: 'center', y: value as YAxis, offsetX: { value: 0, unit: null }, offsetY: { value: 0, unit: null } });
	}

	const result = parseLengthPercentage(value);
	return result.map((value) => ({ x: 'center', y: 'center', offsetX: value, offsetY: { value: 50, unit: '%' } }));
}

function parse2Value(value0: string, value1: string): Result<Position, string> {
	if (xAxis.includes(value1 as XAxis) && yAxis.includes(value0 as YAxis)) {
		return ok({ x: value1 as XAxis, y: value0 as YAxis, offsetX: { value: 0, unit: null }, offsetY: { value: 0, unit: null } });
	}

	let x: XAxis;
	let offsetX: Length | Percentage;
	if (xAxis.includes(value0 as XAxis)) {
		x = value0 as XAxis;
		offsetX = { value: 0, unit: null };
	} else {
		const result = parseLengthPercentage(value0);
		if (result.isErr()) return result;

		x = 'center';
		offsetX = result.unwrap();
	}

	let y: YAxis;
	let offsetY: Length | Percentage;
	if (yAxis.includes(value1 as YAxis)) {
		y = value1 as YAxis;
		offsetY = { value: 0, unit: null };
	} else {
		const result = parseLengthPercentage(value1);
		if (result.isErr()) return result;

		y = 'center';
		offsetY = result.unwrap();
	}

	return ok({ x, y, offsetX, offsetY });
}

function parse4Value(x: string, xOffset: string, y: string, yOffset: string): Result<Position, string> {
	if (!xAxis.includes(x as XAxis)) return err(`Expected one of: ${xAxis.join(', ')}, received: ${x}`);
	if (!yAxis.includes(y as YAxis)) return err(`Expected one of: ${yAxis.join(', ')}, received: ${y}`);

	const offsetX = parseLengthPercentage(xOffset);
	if (offsetX.isErr()) return offsetX;

	const offsetY = parseLengthPercentage(yOffset);
	if (offsetY.isErr()) return offsetY;

	return ok({ x: x as XAxis, y: y as YAxis, offsetX: offsetX.unwrap(), offsetY: offsetY.unwrap() });
}

const xAxis = ['left', 'center', 'right'] as const;
const yAxis = ['top', 'center', 'bottom'] as const;

type XAxis = (typeof xAxis)[number];
type YAxis = (typeof yAxis)[number];

export interface Position {
	x: 'left' | 'center' | 'right';
	y: 'top' | 'center' | 'bottom';
	offsetX: Length | Percentage;
	offsetY: Length | Percentage;
}
