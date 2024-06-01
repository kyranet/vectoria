<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text">
				Decoding
				<editor-attributes-common-info url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/decoding" />
				<editor-attributes-common-animation animatable="no" />
			</span>
		</div>
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
