import { err, ok, type Result } from '@sapphire/result';

export function parsePercentage(value: string): Result<Percentage, string> {
	const match = value.match(/^(-?\d+(?:\.\d+)?)%$/);
	if (match === null) return err(`Failed to parse percentage: ${value}`);

	return ok({ value: Number(match[1]), unit: '%' });
}

export interface Percentage {
	value: number;
	unit: '%';
}
