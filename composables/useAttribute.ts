export function useAttribute(el: SVGElement, attributes: string | [attribute: string, fallbackAttribute: string], defaultValue: string = '') {
	return typeof attributes === 'string'
		? useSingleAttribute(el, attributes, defaultValue)
		: useFallbackAttribute(el, attributes[0], attributes[1]!, defaultValue);
}

function useFallbackAttribute(el: SVGElement, attribute: string, fallbackAttribute: string, defaultValue: string) {
	const value = ref(defaultValue);
	const attributeValue = el.getAttribute(attribute);
	if (attributeValue === null) {
		const fallbackAttributeValue = el.getAttribute(fallbackAttribute);
		if (fallbackAttributeValue !== null) {
			el.setAttribute(attribute, fallbackAttributeValue);
			el.removeAttribute(fallbackAttribute);
			value.value = fallbackAttributeValue;
		}
	} else {
		value.value = attributeValue;
	}

	watch(value, (value) => {
		if (value === defaultValue) el.removeAttribute(attribute);
		else el.setAttribute(attribute, value!);
	});

	return value;
}

function useSingleAttribute(el: SVGElement, attribute: string, defaultValue: string) {
	const value = ref<string>(el.getAttribute(attribute) ?? defaultValue);
	watch(value, (value) => {
		if (value === defaultValue) el.removeAttribute(attribute);
		else el.setAttribute(attribute, value!);
	});

	return value;
}
