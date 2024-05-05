import { BaseGraphicsVectorElement } from './base/BaseGraphicsVectorElement';

export class VectorSwitch extends BaseGraphicsVectorElement<SVGSwitchElement, 'switch'> {
	public constructor(element: SVGSwitchElement) {
		super({ element, title: 'Switch' });
	}
}
