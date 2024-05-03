import type { ClosePath } from '~/utils/svg/path/ClosePath';

export default function render({ el }: { el: ClosePath }) {
	return (
		<editor-element-base title="Close Path">
			<div class="text-base-content-readonly">
				<icon-axis-x class="h-5 w-5" />
				{el.end.x}
				<icon-axis-y class="h-5 w-5" />
				{el.end.y}
			</div>
		</editor-element-base>
	);
}
