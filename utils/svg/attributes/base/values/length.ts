import type { ValueAttributeValue } from './base/makeAttributeValue';
import { parseLength, type Length } from './shared/parseLength';

export function attributeValueLength(): ValueAttributeValue<Length> {
	return {
		name: 'length',
		type: 'value',
		from: (value) => parseLength(value),
		to: (value) => value.toString()
	};
}

export { parseLength, type Length };
