import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEFuncBlue extends BaseVectorElement<SVGFEFuncBElement, 'feFuncB'> {
	public constructor(element: SVGFEFuncBElement) {
		super({ element, title: 'FE Transfer Func (Blue)' });
	}
}
