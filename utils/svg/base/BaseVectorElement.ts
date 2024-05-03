export abstract class BaseVectorElement<Element extends SVGElement> {
	public readonly NAME: string;
	public readonly ICON: Component | null = null;

	public readonly element: Element;
	public id: string | undefined;

	public constructor(element: Element, name: string, icon: Component | null = null) {
		this.element = element;
		this.NAME = name;
		this.ICON = icon;
		this.id = element.id || undefined;
	}
}
