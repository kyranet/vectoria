export function maybeParseAnimationMotionRotate(value: string | undefined | null): AnimateMotionRotate | undefined {
	if (!value) return undefined;
	if (value === 'auto' || value === 'auto-reverse') return value;

	const parsed = Number(value);
	if (Number.isNaN(parsed)) throw new RangeError(`Expected a number, 'auto', or 'auto-reverse', got '${value}'`);
	return parsed;
}

export type AnimateMotionRotate = 'auto' | 'auto-reverse' | number;
