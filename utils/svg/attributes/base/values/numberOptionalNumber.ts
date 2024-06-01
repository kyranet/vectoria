import { err, ok } from '@sapphire/result';
import type { ValueAttributeValue } from './base/makeAttributeValue';

export function attributeValueNumberOptionalNumber(): ValueAttributeValue<[number, number?]> {
	return {
		name: 'number-optional-number',
		type: 'value',
		from: (value) => {
			const index = value.indexOf(' ');
			if (index === -1) {
				const number = Number(value);
				return Number.isNaN(number) ? err(`Expected a number`) : ok([number]);
			}

			const first = Number(value.slice(0, index));
			const second = Number(value.slice(index + 1));
			if (Number.isNaN(first) || Number.isNaN(second)) return err(`Expected a number`);
			return ok([first, second]);
		},
		to: (value) => value.join(' ')
	};
}
