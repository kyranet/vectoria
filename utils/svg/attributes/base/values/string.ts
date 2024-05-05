import { ok } from '@sapphire/result';
import type { ValueAttributeValue } from './base/makeAttributeValue';

export function attributeValueString(): ValueAttributeValue<string> {
	return {
		name: 'string',
		type: 'value',
		from: (value) => ok(value),
		to: (value) => value
	};
}
