import { EditorAttributesAmplitude } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEFuncGreen extends BaseVectorElement<SVGFEFuncGElement, 'feFuncG'> {
	public constructor(element: SVGFEFuncGElement) {
		super({ element, title: 'FE Transfer Func (Green)', inputs: [EditorAttributesAmplitude] });
	}
}
