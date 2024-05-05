export function setLength(original: SVGLength, value: number | SVGLength) {
	if (typeof value === 'number') {
		original.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_NUMBER, value);
	} else {
		original.newValueSpecifiedUnits(value.unitType, value.valueInSpecifiedUnits);
	}
	return original;
}
