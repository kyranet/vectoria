import { EditorAttributesAmplitude } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEFuncRed extends BaseVectorElement<SVGFEFuncRElement, 'feFuncR'> {
	public constructor(element: SVGFEFuncRElement) {
		super({ element, title: 'FE Transfer Func (Red)', inputs: [EditorAttributesAmplitude] });
	}
}
