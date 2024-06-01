import { err, ok, type Result } from '@sapphire/result';
import type {
	Length,
	LengthUnit,
	LengthUnitAbsolute,
	LengthUnitRelativeFont,
	LengthUnitRelativeQueryLength,
	LengthUnitRelativeRootFont,
	LengthUnitRelativeViewport
} from './types/Length';

export function parseLength(value: string): Result<Length, string> {
	if (value === '0') return ok({ value: 0, unit: null });

	const match = value.match(/^(-?\d+(?:\.\d+)?)([a-z]+)$/);
	if (match === null) return err(`Failed to parse length: ${value}`);

	const unit = match[2] as LengthUnit;
	return LengthUnits.includes(unit) ? ok({ value: Number(match[1]), unit }) : err(`Invalid length unit: ${unit}`);
}

export type { Length } from './types/Length';

const LengthUnitRelativeFont: LengthUnitRelativeFont[] = ['cap', 'ch', 'em', 'ex', 'ic', 'lh'];
const LengthUnitRelativeRootFont: LengthUnitRelativeRootFont[] = LengthUnitRelativeFont.map((unit) => `r${unit}` as const);
const LengthUnitRelativeViewport: LengthUnitRelativeViewport[] = ['vh', 'vw', 'vmax', 'vmin', 'vb', 'vi'];
const LengthUnitRelativeQueryLength: LengthUnitRelativeQueryLength[] = ['cqw', 'cqh', 'cqi', 'cqb', 'cqmin', 'cqmax'];
const LengthUnitAbsolute: LengthUnitAbsolute[] = ['px', 'cm', 'mm', 'Q', 'in', 'pc', 'pt'];

export const LengthUnits: LengthUnit[] = [
	...LengthUnitRelativeFont,
	...LengthUnitRelativeRootFont,
	...LengthUnitRelativeViewport,
	...LengthUnitRelativeQueryLength,
	...LengthUnitAbsolute
];
