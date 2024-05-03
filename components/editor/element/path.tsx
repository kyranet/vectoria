import type { VectorPath } from '~/utils/svg/VectorPath';

export default function render({ el }: { el: VectorPath }) {
	return (
		<editor-element-base title="Path" id={el.id}>
			<editor-part-transform transform={el.transform} />
			{el.entries.map((entry) => (
				<editor-path-any el={entry} />
			))}
		</editor-element-base>
	);
}
