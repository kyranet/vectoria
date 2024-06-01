import { EditorAttributesBaseFrequency, EditorAttributesHeight } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFETurbulence extends BaseVectorElement<SVGFETurbulenceElement, 'feTurbulence'> {
	public constructor(element: SVGFETurbulenceElement) {
		super({ element, title: 'FE Turbulence', inputs: [EditorAttributesBaseFrequency, EditorAttributesHeight] });
	}
}
