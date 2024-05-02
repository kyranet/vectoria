import type { Peekable } from '@sapphire/iterator-utilities';
import { trim } from './trim';

export function readBooleanInteger(stream: Peekable<string>) {
	trim(stream);

	const result = stream.peek()!;
	if (result.done) throw new Error('Unexpected end of input, expected a boolean integer');

	const char = result.value;
	if (char === '0' || char === '1') {
		stream.next();
		return char === '1';
	}

	throw new Error(`Expected "0" or "1", received "${char}"`);
}
