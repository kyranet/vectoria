import type { Peekable } from '@sapphire/iterator-utilities';
import { trim } from './trim';

export function readNumber(stream: Peekable<string>) {
	trim(stream);

	let buffer = '';
	let result: IteratorResult<string>;
	while (!(result = stream.peek()!).done) {
		const char = result.value;
		if (char === '-' || char === '+' || char === '.' || (char >= '0' && char <= '9')) {
			buffer += char;
			stream.next();
		} else {
			break;
		}
	}

	if (buffer.length === 0) throw new Error('Unexpected end of input, expected a number');

	const value = Number(buffer);
	if (Number.isNaN(value)) throw new Error(`Expected a number, received "${buffer}"`);

	return value;
}
