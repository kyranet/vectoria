import type { Result } from '@sapphire/result';
import type { ValueAttributeValue } from './base/makeAttributeValue';
import { parseLength, type Length } from './shared/parseLength';
import { parsePercentage, type Percentage } from './shared/parsePercentage';

export function attributeValueLengthPercentage(): ValueAttributeValue<LengthPercentage> {
	return {
		name: 'length-percentage',
		type: 'value',
		from: (value) => parseLengthPercentage(value),
		to: (value) => value.toString()
	};
}

export function parseLengthPercentage(value: string): Result<LengthPercentage, string> {
	return parsePercentage(value).orElse(() => parseLength(value) as any);
}

export type LengthPercentage = Length | Percentage;
