/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/repeatCount
 */
export function maybeParseRepeatCount(value: string | undefined | null): RepeatCount | undefined {
	if (!value) return undefined;
	if (value === 'indefinite') return 'indefinite';

	const parsed = Number(value);
	if (Number.isNaN(parsed)) throw new RangeError(`Expected a number or 'indefinite', got '${value}'`);
	if (parsed < 0) throw new RangeError(`Expected a non-negative number, got '${value}'`);
	return parsed;
}

export type RepeatCount = number | 'indefinite';
