import type { LineTo } from '~/utils/svg/path/LineTo';

export default function render({ el }: { el: LineTo }) {
	return (
		<editor-element-base title="Line To">
			{el.entries.map((entry) => (
				<div class="entry">
					<span>
						<icon-axis-x class="h-5 w-5" />
						{entry.end.x}
						<icon-axis-y class="h-5 w-5" />
						{entry.end.y}
					</span>
				</div>
			))}
		</editor-element-base>
	);
}
