import { err, ok } from '@sapphire/result';
import type { RangeAttributeValue } from './base/makeAttributeValue';

export function attributeValueNumberRange(minimum?: number | null | undefined, maximum?: number | null | undefined): RangeAttributeValue<number> {
	return {
		name: 'number-range',
		type: 'range',
		min: minimum ?? null,
		max: maximum ?? null,
		from: (value) => {
			const number = Number(value);
			return Number.isNaN(number) ? err(`Expected a number between ${minimum} and ${maximum}`) : ok(number);
		},
		to: (value) => value.toString()
	};
}
