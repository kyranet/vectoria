import type { HorizontalLineTo } from '~/utils/svg/path/HorizontalLineTo';

export default function render({ el }: { el: HorizontalLineTo }) {
	return (
		<editor-element-base title="Horizontal Line">
			{el.entries.map(({ end }) => (
				<div>
					<icon-axis-x class="h-5 w-5" />
					{end.x}
					<span class="text-base-content-readonly">
						<icon-axis-y class="h-5 w-5" />
						{end.y}
					</span>
				</div>
			))}
		</editor-element-base>
	);
}
