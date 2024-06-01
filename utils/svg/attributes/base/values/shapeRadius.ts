import { Result, ok } from '@sapphire/result';
import { parseLengthPercentage, type LengthPercentage } from './lengthPercentage';
import type { ValueAttributeValue } from './base/makeAttributeValue';

export function attributeValueShapeRadius(): ValueAttributeValue<ShapeRadius> {
	return {
		name: 'shape-radius',
		type: 'value',
		from: (value) => parseShapeRadius(value),
		to: (value) => value.toString()
	};
}

export function parseShapeRadius(value: string): Result<ShapeRadius, string> {
	if (value === 'closest-side') return ok('closest-side');
	if (value === 'farthest-side') return ok('farthest-side');
	return parseLengthPercentage(value);
}

export type ShapeRadius = 'closest-side' | 'farthest-side' | LengthPercentage;
