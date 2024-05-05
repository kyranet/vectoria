import { BaseVectorElement, type VectorElementOptions } from './BaseVectorElement';

export abstract class BaseGraphicsVectorElement<Element extends SVGGraphicsElement, TagName extends string> extends BaseVectorElement<
	Element,
	TagName
> {
	public transform: SVGTransformList;

	protected constructor(options: VectorElementOptions<Element>) {
		super(options);
		this.transform = options.element.transform.baseVal;
	}
}
