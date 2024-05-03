import type { VectorDefs } from '~/utils/svg/VectorDefs';

export default function render({ el }: { el: VectorDefs }) {
	return (
		<editor-element-base title="Definitions" id={el.id}>
			<editor-part-transform transform={el.transform} />
			{el.children.map((child) => (
				<editor-element-any el={child} />
			))}
		</editor-element-base>
	);
}
