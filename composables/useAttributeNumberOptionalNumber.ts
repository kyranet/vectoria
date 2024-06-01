export function useAttributeNumberOptionalNumber<Defaults extends [string, string?]>(
	el: SVGElement,
	attribute: string
): NumberOptionalNumber<Defaults> {
	const defaultX = '0';
	const defaultY = '0';

	const x = ref<string>(defaultX);
	const y = ref<string | undefined>(defaultY);

	const value = el.getAttribute(attribute);
	if (value === null) {
		x.value = defaultX;
		y.value = defaultY;
	} else {
		const index = value.indexOf(' ');
		if (index === -1) {
			x.value = value;
			y.value = value;
		} else {
			x.value = value.slice(0, index);
			y.value = value.slice(index + 1);
		}
	}

	console.log(value, x.value, y.value);

	watch([x, y], ([x, y]) => {
		if (x === defaultX && y === defaultY) el.removeAttribute(attribute);
		else el.setAttribute(attribute, x === y ? x : `${x} ${y}`);
	});

	return [x, y];
}

export type NumberOptionalNumber<Defaults extends [string, string?]> = [Ref<string | Defaults[0]>, Ref<string | Defaults[1]>];
