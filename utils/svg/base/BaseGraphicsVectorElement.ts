import { BaseVectorElement } from './BaseVectorElement';

export abstract class BaseGraphicsVectorElement<Element extends SVGGraphicsElement> extends BaseVectorElement<Element> {
	public transform: SVGTransformList;

	public constructor(element: Element, name: string, icon: Component | null = null) {
		super(element, name, icon);
		this.transform = element.transform.baseVal;
	}
}
