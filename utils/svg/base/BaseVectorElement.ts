import { EditorAttributesClass, EditorAttributesColor, EditorAttributesId } from '#components';

export type InputComponent = Component<{ el: SVGElement }>;

const SharedAttributes = [EditorAttributesId, EditorAttributesClass, EditorAttributesColor] as InputComponent[];

let id = 0;

export abstract class BaseVectorElement<Element extends SVGElement, TagName extends string> {
	public readonly title: string;
	public readonly icon: Component | null = null;
	public readonly tagName: TagName;
	public readonly element: Element;
	public id: string | undefined;
	public readonly inputs: InputEntry[];

	protected constructor(options: VectorElementOptions<Element>) {
		this.element = options.element;
		this.tagName = options.element.tagName as TagName;
		this.title = options.title;
		this.icon = options.icon ? markRaw(options.icon) : null;
		this.id = options.element.id || undefined;
		this.inputs = markRaw((options.inputs || []).concat(SharedAttributes).map((component) => ({ id: (id++).toString(), component })));
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
	inputs?: InputComponent[];
}

export interface InputEntry {
	id: string;
	component: InputComponent;
}
