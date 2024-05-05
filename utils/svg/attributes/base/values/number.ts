import { err, ok } from '@sapphire/result';
import type { ValueAttributeValue } from './base/makeAttributeValue';

export function attributeValueNumber(): ValueAttributeValue<number> {
	return {
		name: 'number',
		type: 'value',
		from: (value) => {
			const number = Number(value);
			return Number.isNaN(number) ? err(`Expected a number`) : ok(number);
		},
		to: (value) => value.toString()
	};
}
