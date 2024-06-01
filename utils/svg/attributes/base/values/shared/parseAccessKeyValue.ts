import { err, ok, type Result } from '@sapphire/result';
import { parseClockValue } from './parseClockValue';

const RegExp = /^accessKey\((\w)\)(.*)?/;
export function parseAccessKeyValue(value: string): Result<AccessKeyValue, string> {
	const result = RegExp.exec(value);
	if (result === null) return err(`Expected an access key value, but received '${value}'`);

	const [, key, extras] = result;
	return extras
		? ok({ type: 'access-key-value', key, offset: 0 })
		: parseClockValue(extras).map((offset) => ({ type: 'access-key-value', key, offset: offset.value }));
}

export interface AccessKeyValue {
	type: 'access-key-value';
	key: string;
	offset: number;
}
