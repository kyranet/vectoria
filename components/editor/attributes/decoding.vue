<template>
	<label class="form-control">
		<editor-attributes-common-header name="Decoding" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/decoding" animatable="no" />
		<select v-model="value" class="select select-bordered">
			<option value="auto">Auto</option>
			<option value="async">Async</option>
			<option value="sync">Sync</option>
		</select>
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGImageElement }>();
const value = useAttribute(props.el, 'decoding', 'auto');
</script>
