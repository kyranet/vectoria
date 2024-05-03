import { Icon } from '#components';
import type { VectorEllipse } from '~/utils/svg/VectorEllipse';

export default function render({ el }: { el: VectorEllipse }) {
	return (
		<editor-element-base title="Ellipse" id={el.id}>
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
					<icon-ellipse-x-radius class="h-5 w-5" />
					{el.rx.valueAsString}
					<icon-ellipse-y-radius class="h-5 w-5" />
					{el.ry.valueAsString}
				</span>
			</div>
		</editor-element-base>
	);
}
