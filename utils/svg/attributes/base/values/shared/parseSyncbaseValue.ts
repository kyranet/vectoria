import { err, ok, type Result } from '@sapphire/result';

export function parseSyncbaseValue(value: string): Result<SyncbaseValue, string> {
	const parts = value.split('.');
	if (parts.length !== 2) return err(`Expected a syncbase value, but received '${value}'`);

	const [elementId, sync] = parts;
	if (elementId === '') return err(`Expected a syncbase value with an element ID`);
	if (sync !== 'begin' && sync !== 'end') return err(`Expected a syncbase value with 'begin' or 'end' as the sync value`);

	return ok({ type: 'syncbase', elementId, sync });
}

export interface SyncbaseValue {
	type: 'syncbase';
	sync: 'begin' | 'end';
	elementId: string;
}
