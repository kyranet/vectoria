<template>
	<div class="label">
		<span class="label-text">
			Data
			<editor-attributes-common-info url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d" />
			<editor-attributes-common-animation animatable="yes" />
		</span>
	</div>
	<div class="ml-1 rounded-bl-lg border-l-2 border-base-100">
		<div class="ml-1 grid gap-1 rounded-lg bg-base-300 p-2">
			<editor-path-any v-for="entry of entries" :el="entry" @update="onUpdate" />
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGPathElement }>();
const entries = usePathData(props.el);

function onUpdate() {
	const data = entries.map((entry) => entry.toString()).join(' ');
	props.el.setAttribute('d', data);
}
</script>
