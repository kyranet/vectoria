import { err, ok, type Result } from '@sapphire/result';
import { parseClockValue } from './parseClockValue';

export function parseEventValue(value: string): Result<EventValue, string> {
	const index = value.indexOf('.');
	if (index === -1) return err(`Expected an event value, but received '${value}'`);
	if (index === 0) return err(`Expected an event value with an element ID`);

	const elementId = value.slice(0, index);
	const remainder = value.slice(index + 1) as EventValueEventName;
	const offsetIndex = remainder.indexOf(' ');
	if (offsetIndex === -1) {
		return EventValueEventNames.includes(remainder)
			? ok({ type: 'event-value', event: remainder, elementId, offset: 0 })
			: err(`Expected an event name, but received '${remainder}'`);
	}

	const event = remainder.slice(0, offsetIndex) as EventValueEventName;
	if (!EventValueEventNames.includes(event)) return err(`Expected an event name, but received '${event}'`);

	const offset = remainder.slice(offsetIndex + 1);
	return parseClockValue(offset).map((offset) => ({ type: 'event-value', event, elementId, offset: offset.value }));
}

export const EventValueEventNames: EventValueEventName[] = [
	'focus',
	'blur',
	'focusin',
	'focusout',
	'DOMActivate',
	'auxclick',
	'click',
	'dblclick',
	'mousedown',
	'mouseenter',
	'mouseleave',
	'mousemove',
	'mouseout',
	'mouseover',
	'mouseup',
	'wheel',
	'beforeinput',
	'input',
	'keydown',
	'keyup',
	'compositionstart',
	'compositionupdate',
	'compositionend',
	'load',
	'unload',
	'abort',
	'error',
	'select',
	'resize',
	'scroll',
	'beginEvent',
	'endEvent',
	'repeatEvent'
];

export interface EventValue {
	type: 'event-value';
	event: EventValueEventName;
	elementId: string;
	offset: number;
}

export type EventValueEventName =
	| 'focus'
	| 'blur'
	| 'focusin'
	| 'focusout'
	| 'DOMActivate'
	| 'auxclick'
	| 'click'
	| 'dblclick'
	| 'mousedown'
	| 'mouseenter'
	| 'mouseleave'
	| 'mousemove'
	| 'mouseout'
	| 'mouseover'
	| 'mouseup'
	| 'wheel'
	| 'beforeinput'
	| 'input'
	| 'keydown'
	| 'keyup'
	| 'compositionstart'
	| 'compositionupdate'
	| 'compositionend'
	| 'load'
	| 'unload'
	| 'abort'
	| 'error'
	| 'select'
	| 'resize'
	| 'scroll'
	| 'beginEvent'
	| 'endEvent'
	| 'repeatEvent';
