import { ok } from '@sapphire/result';
import type { ValueAttributeValue } from './base/makeAttributeValue';
import { parseAccessKeyValue, type AccessKeyValue } from './shared/parseAccessKeyValue';
import { parseClockValue, type ClockValue } from './shared/parseClockValue';
import { parseEventValue, type EventValue } from './shared/parseEventValue';
import { parseRepeatValue, type RepeatValue } from './shared/parseRepeatValue';
import { parseSyncbaseValue, type SyncbaseValue } from './shared/parseSyncbaseValue';
import { parseWallclockSyncValue, type WallclockSyncValue } from './shared/parseWallclockSyncValue';

export function attributeValueBegin(): ValueAttributeValue<
	'indefinite' | ClockValue | SyncbaseValue | EventValue | RepeatValue | AccessKeyValue | WallclockSyncValue
> {
	return {
		name: 'begin',
		type: 'value',
		from: (value) =>
			value === 'indefinite'
				? ok('indefinite')
				: parseClockValue(value)
						.orElse(() => parseSyncbaseValue(value) as any)
						.orElse(() => parseEventValue(value) as any)
						.orElse(() => parseRepeatValue(value) as any)
						.orElse(() => parseAccessKeyValue(value) as any)
						.orElse(() => parseWallclockSyncValue(value) as any),
		to: (value) => value.toString()
	};
}
