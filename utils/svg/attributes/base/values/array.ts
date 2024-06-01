import { ok } from '@sapphire/result';
import type { ArrayAttributeValue, AttributeValue } from './base/makeAttributeValue';

export function attributeValueArray<const ValueType>(
	attribute: Exclude<AttributeValue<ValueType>, ArrayAttributeValue<ValueType>>,
	separator: string = ';'
): ArrayAttributeValue<ValueType> {
	return {
		name: `array-of-${attribute.name}`,
		type: 'array',
		value: attribute,
		from: (value) => {
			const values: ValueType[] = [];
			for (const part of value.split(separator)) {
				const result = attribute.from(part);
				if (result.isErr()) return result;
				values.push(result.unwrap());
			}

			return ok(values);
		},
		to: (value) => value.map((part) => attribute.to(part)).join(separator)
	};
}
