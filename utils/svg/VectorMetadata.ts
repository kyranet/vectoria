import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorMetadata extends BaseVectorElement<SVGMetadataElement, 'metadata'> {
	public constructor(element: SVGMetadataElement) {
		super({ element, title: 'Metadata' });
	}
}
