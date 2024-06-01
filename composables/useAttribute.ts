export function useAttribute(el: SVGElement, attribute: string, defaultValue: string = '') {
	const value = ref<string>(el.getAttribute(attribute) ?? defaultValue);
	watch(value, (value) => {
		if (value === defaultValue) el.removeAttribute(attribute);
		else el.setAttribute(attribute, value!);
	});

	return value;
}
