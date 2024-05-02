import type { Peekable } from '@sapphire/iterator-utilities';

const PATH_TRIM_WHITESPACE = /[\s,]/;
export function trim(stream: Peekable<string>) {
	let result: IteratorResult<string>;
	while (!(result = stream.peek()!).done && PATH_TRIM_WHITESPACE.test(result.value)) stream.next();
}
