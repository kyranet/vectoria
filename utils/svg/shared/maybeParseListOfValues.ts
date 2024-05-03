export function maybeParseListOfValues(value: string | undefined | null): string[] | undefined {
	if (!value) return undefined;
	return value.split(/\s*[,;]\s*/);
}
