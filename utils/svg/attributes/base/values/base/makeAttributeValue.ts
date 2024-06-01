import type { Result } from '@sapphire/result';

export function makeAttributeValue<const ValueType, const Attribute extends AttributeValue<ValueType>>(data: Attribute): Attribute {
	return data;
}

export interface BaseAttributeValue<ValueType> {
	readonly name: string;
	readonly from: (value: string) => Result<ValueType, string>;
	readonly to: (value: ValueType) => string;
}

export type AttributeValue<ValueType> =
	| ValueAttributeValue<ValueType>
	| SelectAttributeValue<ValueType>
	| RangeAttributeValue<ValueType>
	| ArrayAttributeValue<ValueType>;

export interface ArrayAttributeValue<ValueType> extends BaseAttributeValue<ValueType[]> {
	readonly type: 'array';
	readonly value: AttributeValue<ValueType>;
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
