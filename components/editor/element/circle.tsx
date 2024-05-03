import { Icon } from '#components';
import type { VectorCircle } from '~/utils/svg/VectorCircle';

export default function render({ el }: { el: VectorCircle }) {
	return (
		<editor-element-base title="Circle" id={el.id}>
			<editor-part-transform transform={el.transform} />
			<div class="flex flex-row justify-between gap-2">
				<span>
					<Icon name="ph:arrow-line-left-duotone" class="h-5 w-5 text-primary" />
					{el.cx.valueAsString}
				</span>
				<span>
					<Icon name="ph:arrow-line-up-duotone" class="h-5 w-5 text-primary" />
					{el.cy.valueAsString}
				</span>
				<span>
					<Icon name="ph:arrows-horizontal-duotone" class="h-5 w-5 text-primary" />
					{el.r.valueAsString}
				</span>
			</div>
		</editor-element-base>
	);
}
