<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text">
				Identifier
				<editor-attributes-common-info url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/id" />
				<editor-attributes-common-animation animatable="no" />
			</span>
		</div>
		<input v-model="value" type="text" placeholder="unset" class="input" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGElement }>();
const value = useAttribute(props.el, 'id');
</script>
