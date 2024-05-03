import { Icon } from '#components';
import type { VectorRect } from '~/utils/svg/VectorRect';

export default function render({ el }: { el: VectorRect }) {
	return (
		<editor-element-base title="Rectangle" id={el.id}>
			<editor-part-transform transform={el.transform} />
			<div class="flex flex-row justify-between gap-2">
				<span>
					<Icon name="ph:arrow-line-left-duotone" class="h-5 w-5 text-primary" />
					{el.x.valueAsString}
				</span>
				<span>
					<Icon name="ph:arrow-line-up-duotone" class="h-5 w-5 text-primary" />
					{el.y.valueAsString}
				</span>
				<span>
					<icon-ellipse-x-radius class="h-5 w-5" />
					{el.width.valueAsString}
				</span>
				<span>
					<icon-ellipse-y-radius class="h-5 w-5" />
					{el.height.valueAsString}
				</span>
			</div>
		</editor-element-base>
	);
}
