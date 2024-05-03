import type { VerticalLineTo } from '~/utils/svg/path/VerticalLineTo';

export default function render({ el }: { el: VerticalLineTo }) {
	return (
		<editor-element-base title="Vertical Line">
			{el.entries.map(({ end }) => (
				<div>
					<span class="text-base-content-readonly">
						<icon-axis-x class="h-5 w-5" />
						{end.x}
					</span>
					<icon-axis-y class="h-5 w-5" />
					{end.y}
				</div>
			))}
		</editor-element-base>
	);
}
