import { err, ok, type Result } from '@sapphire/result';

const ClockRegExp = /^(?:(?<hours>\d{1,2}):)?(?:(?<minutes>\d{1,2}):)(?<seconds>\d{1,2})(\.(?<milliseconds>\d+))?$/;
const TimecountRegExp = /^(?<timecount>\d+)(\.(?<fraction>\d+))?(?<metric>h|min|s|ms)?$/;
export function parseClockValue(value: string): Result<ClockValue, string> {
	const clock = ClockRegExp.exec(value);
	if (clock !== null) return handleClockResult(clock);

	const timecount = TimecountRegExp.exec(value);
	if (timecount !== null) return handleTimecountResult(timecount);

	return err(`Failed to parse clock value: ${value}`);
}

function handleClockResult(result: RegExpExecArray): Result<ClockValue, string> {
	if (result.groups === undefined) return err(`Failed to parse clock value: ${result[0]}`);

	let hours: number;
	if (result.groups.hours === undefined) {
		hours = 0;
	} else {
		hours = Number(result.groups.hours);
		if (hours < 0) return err(`Invalid hours: ${hours}`);
	}

	const minutes = Number(result.groups.minutes);
	if (minutes < 0 || minutes > 59) return err(`Invalid minutes: ${minutes}`);

	const seconds = Number(result.groups.seconds);
	if (seconds < 0 || seconds > 59) return err(`Invalid seconds: ${seconds}`);

	let milliseconds: number;
	if (result.groups.fraction === undefined) {
		milliseconds = 0;
	} else {
		milliseconds = Number(result.groups.fraction);
		if (milliseconds < 0) return err(`Invalid fraction: ${milliseconds}`);
	}

	return ok({ type: 'clock-value', value: hours * Hour + minutes * Minute + seconds * Second + milliseconds });
}

function handleTimecountResult(result: RegExpExecArray): Result<ClockValue, string> {
	if (result.groups === undefined) return err(`Failed to parse timecount value: ${result[0]}`);

	const timecount = Number(result.groups.timecount);
	if (timecount < 0) return err(`Invalid timecount: ${timecount}`);

	let fraction: number;
	if (result.groups.fraction === undefined) {
		fraction = 0;
	} else {
		fraction = Number(result.groups.fraction);
		if (fraction < 0) return err(`Invalid fraction: ${fraction}`);
	}

	let metric: 'h' | 'min' | 's' | 'ms';
	if (result.groups.metric === undefined) {
		metric = 's';
	} else {
		metric = result.groups.metric as 'h' | 'min' | 's' | 'ms';
	}

	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	let milliseconds = 0;
	switch (metric) {
		case 'h':
			hours = timecount;
			minutes = fraction / 60;
			break;
		case 'min':
			minutes = timecount;
			seconds = fraction / 60;
			break;
		case 's':
			seconds = timecount;
			milliseconds = timecount / 1000;
			break;
		case 'ms':
			milliseconds = timecount + fraction / 1000;
			break;
	}

	return ok({ type: 'clock-value', value: hours * Hour + minutes * Minute + seconds * Second + milliseconds });
}

const Second = 1000;
const Minute = 60 * Second;
const Hour = 60 * Minute;

export interface ClockValue {
	type: 'clock-value';
	value: number;
}
