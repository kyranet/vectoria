import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorStop extends BaseVectorElement<SVGStopElement, 'stop'> {
	public constructor(element: SVGStopElement) {
		super({ element, title: 'Stop' });
	}
}
