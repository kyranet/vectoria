import type { VectorA } from '~/utils/svg/VectorA';

export default function render({ el }: { el: VectorA }) {
	return (
		<editor-element-base title="Anchor" id={el.id}>
			<editor-part-transform transform={el.transform} />
			{el.download}
			{el.href}
			{el.referredPolicy}
			{el.relationship}
			{el.target}
			{el.type}
		</editor-element-base>
	);
}
