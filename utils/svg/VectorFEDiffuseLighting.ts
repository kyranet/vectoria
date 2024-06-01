import { EditorAttributesHeight } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEDiffuseLighting extends BaseVectorElement<SVGFEDiffuseLightingElement, 'feDiffuseLighting'> {
	public constructor(element: SVGFEDiffuseLightingElement) {
		super({ element, title: 'FE Diffuse Lighting', inputs: [EditorAttributesHeight] });
	}
}
