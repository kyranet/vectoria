import {
	EditorElementA,
	EditorElementCircle,
	EditorElementDefs,
	EditorElementEllipse,
	EditorElementG,
	EditorElementPath,
	EditorElementRect,
	EditorElementSvg,
	EditorElementUse
} from '#components';
import type { VectorA } from '~/utils/svg/VectorA';
import type { VectorCircle } from '~/utils/svg/VectorCircle';
import type { VectorDefs } from '~/utils/svg/VectorDefs';
import type { VectorEllipse } from '~/utils/svg/VectorEllipse';
import type { VectorG } from '~/utils/svg/VectorG';
import type { VectorPath } from '~/utils/svg/VectorPath';
import type { VectorRect } from '~/utils/svg/VectorRect';
import type { VectorRoot } from '~/utils/svg/VectorRoot';
import type { VectorUse } from '~/utils/svg/VectorUse';
import type { BaseVectorElement } from '~/utils/svg/base/BaseVectorElement';

export default function render(props: { el: BaseVectorElement<SVGElement> }) {
	switch (props.el.element.tagName) {
		case 'a':
			return <EditorElementA el={props.el as VectorA} />;
		case 'circle':
			return <EditorElementCircle el={props.el as VectorCircle} />;
		case 'defs':
			return <EditorElementDefs el={props.el as VectorDefs} />;
		case 'ellipse':
			return <EditorElementEllipse el={props.el as VectorEllipse} />;
		case 'g':
			return <EditorElementG el={props.el as VectorG} />;
		case 'path':
			return <EditorElementPath el={props.el as VectorPath} />;
		case 'rect':
			return <EditorElementRect el={props.el as VectorRect} />;
		case 'svg':
			return <EditorElementSvg el={props.el as VectorRoot} />;
		case 'use':
			return <EditorElementUse el={props.el as VectorUse} />;
		default:
			console.log({ unsupported: props.el });
			return <div></div>;
	}
}
