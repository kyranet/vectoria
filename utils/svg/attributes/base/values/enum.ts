import { err, ok } from '@sapphire/result';
import type { SelectAttributeValue } from './base/makeAttributeValue';

export function attributeValueEnum<const ValueType extends readonly string[]>(...values: ValueType): SelectAttributeValue<ValueType[number]> {
	return {
		name: 'enum',
		type: 'select',
		select: values,
		from: (value) => (values.includes(value) ? ok(value as ValueType[number]) : err(`Expected one of: ${values.join(', ')}`)),
		to: (value) => value
	};
}
