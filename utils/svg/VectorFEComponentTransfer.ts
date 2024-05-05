import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEComponentTransfer extends BaseVectorElement<SVGFEComponentTransferElement, 'feComponentTransfer'> {
	public constructor(element: SVGFEComponentTransferElement) {
		super({ element, title: 'FE Component Transfer' });
	}
}
