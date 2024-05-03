import { BaseGraphicsVectorElement } from './base/BaseGraphicsVectorElement';
import type { MIMEType, TargetType } from './types/dom';

export class VectorA extends BaseGraphicsVectorElement<SVGAElement> {
	public download: string | undefined;
	public href: string | undefined;
	public referredPolicy: ReferrerPolicy | undefined;
	public relationship: string | undefined;
	public target: TargetType | undefined;
	public type: MIMEType | undefined;

	public constructor(element: SVGAElement) {
		super(element, 'Anchor');
		this.download = element.getAttribute('download') ?? undefined;
		this.href = element.href.baseVal;
		this.referredPolicy = (element.getAttribute('referrerpolicy') ?? undefined) as ReferrerPolicy | undefined;
		this.relationship = element.rel;
		this.target = element.target.baseVal;
		this.type = element.getAttribute('type') as MIMEType | undefined;
	}
}
