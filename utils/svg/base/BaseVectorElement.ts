export abstract class BaseVectorElement<Element extends SVGElement, TagName extends string> {
	public readonly title: string;
	public readonly icon: Component | null = null;
	public readonly tagName: TagName;

	public readonly element: Element;
	public id: string | undefined;

	protected constructor(options: VectorElementOptions<Element>) {
		this.element = options.element;
		this.tagName = options.element.tagName as TagName;
		this.title = options.title;
		this.icon = options.icon ?? null;
		this.id = options.element.id || undefined;
	}

	protected setOrRemoveAttribute<T extends string | string[]>(name: string, value: T | undefined | null): T | null {
		if (value === null || value === undefined || value.length === 0) {
			this.element.removeAttribute(name);
			return null;
		}

		this.element.setAttribute(name, Array.isArray(value) ? value.join(';') : value);
		return value;
	}
}

export interface VectorElementOptions<Element extends SVGElement> {
	element: Element;
	title: string;
	icon?: Component | null;
}
