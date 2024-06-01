import type { VectorAny } from '../../shared/makeVectorElement';
import type { AttributeValue, BaseAttributeValue } from './values/base/makeAttributeValue';

export function makeAttribute<
	const PropertyName extends string,
	const Values extends readonly AttributeValue<any>[],
	const AppliesTo extends readonly VectorAny['tagName'][]
>(data: Omit<Attribute<PropertyName, Values, AppliesTo>, 'privatePropertyName'>): Attribute<PropertyName, Values, AppliesTo> {
	return { privatePropertyName: `_${data.propertyName}`, ...data };
}

export interface Attribute<
	PropertyName extends string = string,
	Values extends readonly AttributeValue<any>[] = readonly AttributeValue<any>[],
	AppliesTo extends readonly VectorAny['tagName'][] = readonly VectorAny['tagName'][]
> {
	/**
	 * The name of the attribute.
	 */
	readonly name: string;

	/**
	 * The name of the property to read and update.
	 */
	readonly propertyName: PropertyName;

	/**
	 * The name of the private property to store the value.
	 */
	readonly privatePropertyName: `_${PropertyName}`;

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
	readonly default: DefaultAttributeValue<
		{ [K in keyof Values]: Values[K] extends BaseAttributeValue<infer T> ? T : never }[number] | null,
		AppliesTo
	>;

	/**
	 * Whether the attribute is animatable.
	 */
	readonly animatable: boolean | 'discrete';

	/**
	 * The elements that the attribute can be applied to.
	 */
	readonly appliesTo: AppliesTo;

	/**
	 * The URL to the documentation of the attribute.
	 */
	readonly url: string;
}

export type DefaultAttributeValue<Value, AppliesTo extends readonly VectorAny['tagName'][]> = Value | ((tag: AppliesTo[number]) => Value);
