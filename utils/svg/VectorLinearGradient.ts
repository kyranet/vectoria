import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorLinearGradient extends BaseVectorElement<SVGLinearGradientElement, 'linearGradient'> {
	public constructor(element: SVGLinearGradientElement) {
		super({ element, title: 'Linear Gradient' });
	}
}
