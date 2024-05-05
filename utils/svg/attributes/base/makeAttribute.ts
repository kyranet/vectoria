import type { VectorAny } from '../../shared/makeVectorElement';
import type { AttributeValue } from './values/base/makeAttributeValue';

export function makeAttribute<const PropertyName extends PropertyKey, const Values extends readonly AttributeValue<any>[]>(
	data: Attribute<PropertyName, Values>
): Attribute<PropertyName, Values> {
	return data;
}

export interface Attribute<PropertyName extends PropertyKey, Values extends readonly AttributeValue<any>[]> {
	/**
	 * The name of the attribute.
	 */
	readonly name: string;

	/**
	 * The name of the property to read and update.
	 */
	readonly propertyName: PropertyName;

	/**
	 * The title of the attribute.
	 */
	readonly title: string;

	/**
	 * The types that the attribute can have.
	 */
	readonly types: Values;

	/**
	 * The default value of the attribute.
	 */
	readonly default: Values extends readonly AttributeValue<infer ValueType>[] ? ValueType : never;

	/**
	 * The elements that the attribute can be applied to.
	 */
	readonly appliesTo: VectorAny['tagName'][];

	/**
	 * The URL to the documentation of the attribute.
	 */
	readonly url: string;
}
