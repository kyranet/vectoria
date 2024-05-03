import { Icon } from '#components';
import type { VectorRoot } from '~/utils/svg/VectorRoot';

export default function render({ el }: { el: VectorRoot }) {
	return (
		<editor-element-base title="SVG" id={el.id}>
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
					<Icon name="ph:arrows-horizontal-duotone" class="h-5 w-5 text-primary" />
					{el.width.valueAsString}
					<Icon name="ph:arrows-vertical-duotone" class="h-5 w-5 text-primary" />
					{el.height.valueAsString}
				</span>
			</div>

			{el.children.map((child) => (
				<editor-element-any el={child} />
			))}
		</editor-element-base>
	);
}
