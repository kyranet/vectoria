<template>
	<div class="label">
		<editor-attributes-common-header name="Data" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d" animatable="yes" />
	</div>
	<div class="ml-1 rounded-bl-lg border-l-2 border-base-100">
		<div class="ml-1 grid gap-4 rounded-lg bg-base-300 p-2">
			<editor-path-any v-for="entry of entries" :el="entry" @update="onUpdate" />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { VectorPath } from '~/utils/svg/VectorPath';

const props = defineProps<{ el: SVGPathElement }>();
const entries = reactive(usePathData(props.el)) as VectorPath.PathEntry[];

function onUpdate() {
	const data = entries.map((entry) => entry.toString()).join(' ');
	props.el.setAttribute('d', data);
}
</script>
