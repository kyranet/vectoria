export function mapChildren<const T>(element: Element, callback: (child: Element) => T): T[] {
	return [...element.children].map(callback);
}
