import type { ValueAttributeValue } from './base/makeAttributeValue';
import { parsePercentage, type Percentage } from './shared/parsePercentage';

export function attributeValuePercentage(): ValueAttributeValue<Percentage> {
	return {
		name: 'percentage',
		type: 'value',
		from: (value) => parsePercentage(value),
		to: (value) => value.toString()
	};
}

export { parsePercentage, type Percentage };
