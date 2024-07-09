<template>
	<label class="form-control">
		<editor-attributes-common-header
			name="Alignment Baseline"
			url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline"
			animatable="yes"
		/>
		<select v-model="value" class="select select-bordered">
			<option value="auto">Auto</option>
			<option value="baseline">Baseline</option>
			<option value="middle">Middle</option>
			<option value="central">Central</option>
			<option value="ideographic">Ideographic</option>
			<option value="alphabetic">Alphabetic</option>
			<option value="hanging">Hanging</option>
			<option value="mathematical">Mathematical</option>
			<option value="top">Top</option>
			<option value="center">Center</option>
			<option value="bottom">Bottom</option>
		</select>
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGTSpanElement | SVGTextPathElement }>();
const value = useAttribute(props.el, 'alignment-baseline', 'auto');
</script>
