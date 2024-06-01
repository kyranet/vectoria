import { err, ok, type Result } from '@sapphire/result';
import { parseClockValue } from './parseClockValue';

const RegExp = /^(\w+).repeat\((\d+)\)(.*)?/;
export function parseRepeatValue(value: string): Result<RepeatValue, string> {
	const result = RegExp.exec(value);
	if (result === null) return err(`Expected a repeat value, but received '${value}'`);

	const [, elementId, count, extras] = result;
	return !extras
		? ok({ type: 'repeat-value', elementId, count: Number(count), offset: 0 })
		: parseClockValue(extras).map((offset) => ({ type: 'repeat-value', elementId, count: Number(count), offset: offset.value }));
}

export interface RepeatValue {
	type: 'repeat-value';
	elementId: string;
	count: number;
	offset: number;
}
