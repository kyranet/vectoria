import type { Result } from '@sapphire/result';

export function makeAttributeValue<
	const ValueType,
	const Attribute extends ValueAttributeValue<ValueType> | SelectAttributeValue<ValueType> | RangeAttributeValue<ValueType>
>(data: Attribute): Attribute {
	return data;
}

interface BaseAttributeValue<ValueType> {
	readonly name: string;
	readonly from: (value: string) => Result<ValueType, string>;
	readonly to: (value: ValueType) => string;
}

export interface ValueAttributeValue<ValueType> extends BaseAttributeValue<ValueType> {
	readonly type: 'value';
}

export interface SelectAttributeValue<ValueType> extends BaseAttributeValue<ValueType> {
	readonly type: 'select';
	readonly select: readonly string[];
}

export interface RangeAttributeValue<ValueType> extends BaseAttributeValue<ValueType> {
	readonly type: 'range';
	readonly min: ValueType | null;
	readonly max: ValueType | null;
}
