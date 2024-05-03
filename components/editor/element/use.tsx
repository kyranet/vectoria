import { Icon } from '#components';
import type { VectorUse } from '~/utils/svg/VectorUse';

export default function render({ el }: { el: VectorUse }) {
	return (
		<editor-element-base title="Use" id={el.id}>
			<editor-part-transform transform={el.transform} />
			<span>
				<icon-axis-x class="h-5 w-5" />
				{el.x.valueAsString}
				<icon-axis-y class="h-5 w-5" />
				{el.y.valueAsString}
			</span>
			<span>
				<Icon name="ph:arrows-horizontal-duotone" class="h-5 w-5 text-primary" />
				{el.width.valueAsString}
				<Icon name="ph:arrows-vertical-duotone" class="h-5 w-5 text-primary" />
				{el.height.valueAsString}
			</span>
			<span>
				<Icon name="ph:link-duotone" class="h-5 w-5 text-primary" />
				{el.href}
			</span>
		</editor-element-base>
	);
}
