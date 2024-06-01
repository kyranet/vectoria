import { EditorAttributesAmplitude } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEFuncAlpha extends BaseVectorElement<SVGFEFuncAElement, 'feFuncA'> {
	public constructor(element: SVGFEFuncAElement) {
		super({ element, title: 'FE Transfer Func (Alpha)', inputs: [EditorAttributesAmplitude] });
	}
}
