<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text">
				Base Frequency
				<editor-attributes-common-info url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseFrequency" />
				<editor-attributes-common-animation animatable="yes" />
			</span>
		</div>
		<div class="input input-bordered flex items-center gap-1">
			<input v-model="x" type="number" class="min-w-0 shrink" min="0" step="0.01" />
			<input v-model="y" type="number" class="min-w-0 shrink" min="0" step="0.01" />
		</div>
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGFETurbulenceElement }>();
const [x, y] = useAttributeNumberOptionalNumber(props.el, 'baseFrequency');
</script>
