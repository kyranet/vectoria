import { err, ok, type Result } from '@sapphire/result';

const RegExp = /^wallclock\((.+?)\)/;
export function parseWallclockSyncValue(value: string): Result<WallclockSyncValue, string> {
	const result = RegExp.exec(value);
	if (result === null) return err(`Expected a wallclock sync value, but received '${value}'`);

	const time = Date.parse(result[1]);
	if (Number.isNaN(time)) return err(`Failed to parse wallclock sync value: ${value}`);

	return ok({ type: 'wallclock', value: time });
}

export interface WallclockSyncValue {
	type: 'wallclock';
	value: number;
}
