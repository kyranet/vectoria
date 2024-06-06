import { EditorAttributesHeight, EditorAttributesWidth } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFESpecularLighting extends BaseVectorElement<SVGFESpecularLightingElement, 'feSpecularLighting'> {
	public constructor(element: SVGFESpecularLightingElement) {
		super({ element, title: 'FE Specular Lighting', inputs: [EditorAttributesWidth, EditorAttributesHeight] });
	}
}
