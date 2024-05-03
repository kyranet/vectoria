import type { VectorG } from '~/utils/svg/VectorG';

export default function render({ el }: { el: VectorG }) {
	return (
		<editor-element-base title="Group" id={el.id}>
			<editor-part-transform transform={el.transform} />
			{el.children.map((child) => (
				<editor-element-any el={child} />
			))}
		</editor-element-base>
	);
}
